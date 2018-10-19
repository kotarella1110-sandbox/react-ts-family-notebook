import { v4 as uuid } from 'uuid';
import { SagaIterator, delay } from 'redux-saga';
import { all, race, call, put, cancelled, takeEvery } from 'redux-saga/effects';
import { BEGIN, COMMIT, REVERT } from 'redux-optimistic-ui';
import { Action } from 'typescript-fsa';
import { replace } from 'connected-react-router';
import { FolderEntities } from 'models';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';
import * as actions from 'store/actions';
import * as api from 'services/api';

function* fetchFoldersWorker({
  payload,
}: ReturnType<typeof actions.fetchFolders.started>): SagaIterator {
  yield call(
    bindAsyncAction(actions.fetchFolders, { skipStartedAction: true })(
      function*(payload): SagaIterator {
        const result = yield call(api.fetchFolders, payload);
        return result;
      }
    ),
    payload
  );
}

function* addFolderWorker({
  payload,
}: ReturnType<typeof actions.addFolder.started>): SagaIterator {
  // Optimistic updates
  const optimisticTransactionId = uuid();
  const tmpId = uuid();

  yield put(
    actions.addFolder.done(
      { params: payload, result: { ...payload, id: tmpId } },
      {
        optimisticTransactionId,
        optimistic: {
          type: BEGIN,
          id: optimisticTransactionId,
        },
      }
    )
  );

  try {
    const { result, timeout } = yield race({
      result: call(api.addFolder, payload),
      timeout: call(delay, 2000),
    });
    if (timeout) {
      throw new Error('timeouted');
    }
    yield put(
      actions.addFolder.done(
        { params: payload, result: { ...result, tmpId } },
        {
          optimistic: {
            type: REVERT, // folder の id 一時的に生成した ID のため、State を戻す
            id: optimisticTransactionId,
          },
        }
      )
    );
  } catch (error) {
    yield put(
      actions.addFolder.failed(
        { error, params: payload },
        {
          optimistic: {
            type: REVERT,
            id: optimisticTransactionId,
          },
        }
      )
    );
  } finally {
    if (yield cancelled()) {
      yield put(
        actions.addFolder.failed(
          {
            error: new Error('cancelled'),
            params: payload,
          },
          {
            optimistic: {
              type: REVERT,
              id: optimisticTransactionId,
            },
          }
        )
      );
    }
  }
}

function* editFolderWorker({
  payload,
}: ReturnType<typeof actions.editFolder.started>): SagaIterator {
  // Optimistic updates
  const optimisticTransactionId = uuid();

  yield put(
    actions.editFolder.done(
      { params: payload, result: payload },
      {
        optimisticTransactionId,
        optimistic: {
          type: BEGIN,
          id: optimisticTransactionId,
        },
      }
    )
  );

  try {
    const { result, timeout } = yield race({
      result: call(api.editFolder, payload),
      timeout: call(delay, 2000),
    });
    if (timeout) {
      throw new Error('timeouted');
    }
    yield put(
      actions.editFolder.done(
        { result, params: payload },
        {
          optimistic: {
            type: COMMIT,
            id: optimisticTransactionId,
          },
        }
      )
    );
  } catch (error) {
    yield put(
      actions.editFolder.failed(
        { error, params: payload },
        {
          optimistic: {
            type: REVERT,
            id: optimisticTransactionId,
          },
        }
      )
    );
  } finally {
    if (yield cancelled()) {
      yield put(
        actions.editFolder.failed(
          {
            error: new Error('cancelled'),
            params: payload,
          },
          {
            optimistic: {
              type: REVERT,
              id: optimisticTransactionId,
            },
          }
        )
      );
    }
  }
}

function* deleteFolderWorker({
  payload,
}: ReturnType<typeof actions.deleteFolder.started>): SagaIterator {
  // Optimistic updates
  const optimisticTransactionId = uuid();

  yield put(
    actions.deleteFolder.done(
      { params: payload, result: payload },
      {
        optimisticTransactionId,
        optimistic: {
          type: BEGIN,
          id: optimisticTransactionId,
        },
      }
    )
  );

  yield put(replace(`/careReceivers/${payload.careReceiverId}/info`));

  try {
    const { result, timeout } = yield race({
      result: call(api.deleteFolder, payload),
      timeout: call(delay, 2000),
    });
    if (timeout) {
      throw new Error('timeouted');
    }
    yield put(
      actions.deleteFolder.done(
        { result, params: payload },
        {
          optimistic: {
            type: COMMIT,
            id: optimisticTransactionId,
          },
        }
      )
    );
  } catch (error) {
    yield put(
      actions.deleteFolder.failed(
        { error, params: payload },
        {
          optimistic: {
            type: REVERT,
            id: optimisticTransactionId,
          },
        }
      )
    );
  } finally {
    if (yield cancelled()) {
      yield put(
        actions.deleteFolder.failed(
          {
            error: new Error('cancelled'),
            params: payload,
          },
          {
            optimistic: {
              type: REVERT,
              id: optimisticTransactionId,
            },
          }
        )
      );
    }
  }
}

function* fetchFolderContentsWorker({
  payload: {
    result: { entities, result },
  },
}: Action<any>): SagaIterator {
  yield all(
    result.map(
      (folderId: FolderEntities['id']) =>
        entities.folders[folderId].folders
          ? null
          : put(actions.fetchFolderContents.started({ folderId }))
    )
  );
}

export default function* watcher(): SagaIterator {
  yield takeEvery(actions.fetchFolders.started.type, fetchFoldersWorker);
  yield takeEvery(actions.addFolder.started.type, addFolderWorker);
  yield takeEvery(actions.editFolder.started.type, editFolderWorker);
  yield takeEvery(actions.deleteFolder.started.type, deleteFolderWorker);
  yield takeEvery(actions.fetchFolders.done.type, fetchFolderContentsWorker);
}
