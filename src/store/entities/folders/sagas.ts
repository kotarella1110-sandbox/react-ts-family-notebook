import { SagaIterator } from 'redux-saga';
import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import { Action } from 'typescript-fsa';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';
import { FoldersEntities } from 'models';
import { getFolders } from './selectors';
import * as actions from 'store/actions';
import { folders } from 'store/resources';

function* fetchFolderContentsWorker({
  payload: {
    result: { entities, result },
  },
}: Action<any>): SagaIterator {
  yield all(
    result.map((folderId: number) => {
      if (!entities.folders[folderId].folders) {
        return put(actions.fetchFolderContents.started({ folderId }));
      }
      return null;
    })
  );
}

const fetchFolders = (
  payload: ReturnType<typeof actions.fetchFolders.started>['payload']
) =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve(
          folders.filter(
            (folder: any) => folder.careReceiverId === payload.careReceiverId
          )
        ),
      10
    )
  );

function* fetchFoldersWorker({
  payload,
}: ReturnType<typeof actions.fetchFolders.started>): SagaIterator {
  yield call(
    bindAsyncAction(actions.fetchFolders, { skipStartedAction: true })(
      function*(payload): SagaIterator {
        const folders = yield call(fetchFolders, payload);
        return folders;
      }
    ),
    payload
  );
}

function* addFolderWorker({
  payload,
}: ReturnType<typeof actions.addFolder.started>) {
  yield call(
    bindAsyncAction(actions.addFolder, { skipStartedAction: true })(function*(
      payload
    ): SagaIterator {
      const state: FoldersEntities = yield select(getFolders);
      return {
        ...payload,
        id:
          Object.keys(state).reduce(
            (maxId, id) => Math.max(Number(id), maxId),
            -1
          ) + 1,
      };
    }),
    payload
  );
}

export default function* watcher(): SagaIterator {
  yield takeEvery(actions.fetchFolders.started.type, fetchFoldersWorker);
  yield takeEvery(actions.addFolder.started.type, addFolderWorker);
  yield takeEvery(actions.fetchFolders.done.type, fetchFolderContentsWorker);
}
