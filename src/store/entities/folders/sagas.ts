import { SagaIterator } from 'redux-saga';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { Action } from 'typescript-fsa';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';
import { FolderEntities } from 'models';
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

function* fetchFolderContentsWorker({
  payload: {
    result: { entities, result },
  },
}: Action<any>): SagaIterator {
  yield all(
    result.map((folderId: FolderEntities['id']) => {
      if (!entities.folders[folderId].folders) {
        return put(actions.fetchFolderContents.started({ folderId }));
      }
      return null;
    })
  );
}

function* addFolderWorker({
  payload,
}: ReturnType<typeof actions.addFolder.started>) {
  yield call(
    bindAsyncAction(actions.addFolder, { skipStartedAction: true })(function*(
      payload
    ): SagaIterator {
      const result = yield call(api.addFolder, payload);
      return result;
    }),
    payload
  );
}

function* editFolderWorker({
  payload,
}: ReturnType<typeof actions.editFolder.started>) {
  yield call(
    bindAsyncAction(actions.editFolder, { skipStartedAction: true })(function*(
      payload
    ): SagaIterator {
      const result = yield call(api.editFolder, payload);
      return result;
    }),
    payload
  );
}

function* deleteFolderWorker({
  payload,
}: ReturnType<typeof actions.deleteFolder.started>) {
  yield call(
    bindAsyncAction(actions.deleteFolder, { skipStartedAction: true })(
      function*(payload): SagaIterator {
        const result = yield call(api.deleteFolder, payload);
        return result;
      }
    ),
    payload
  );
}

export default function* watcher(): SagaIterator {
  yield takeEvery(actions.fetchFolders.started.type, fetchFoldersWorker);
  yield takeEvery(actions.fetchFolders.done.type, fetchFolderContentsWorker);
  yield takeEvery(actions.addFolder.started.type, addFolderWorker);
  yield takeEvery(actions.editFolder.started.type, editFolderWorker);
  yield takeEvery(actions.deleteFolder.started.type, deleteFolderWorker);
}
