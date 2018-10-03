import { SagaIterator } from 'redux-saga';
import { call, select, takeEvery } from 'redux-saga/effects';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';
import { FolderResources, FoldersEntities } from 'models';
import { getFolders } from './selectors';
import * as actions from 'store/actions';

const folders: FolderResources[] = [
  {
    id: 0,
    careReceiverId: 0,
    name: '病歴やアレルギーなど',
  },
  {
    id: 1,
    careReceiverId: 0,
    name: 'お薬情報',
  },
  {
    id: 2,
    careReceiverId: 1,
    name: '病歴やアレルギーなど',
  },
  {
    id: 3,
    careReceiverId: 1,
    name: 'お薬情報',
  },
];

const fetchFolders = (
  payload: ReturnType<typeof actions.fetchFolders.started>['payload']
) =>
  new Promise<FolderResources[]>(resolve =>
    setTimeout(
      () =>
        resolve(
          folders.filter(
            (folder: FolderResources) =>
              folder.careReceiverId === payload.careReceiverId
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
        const folders: FolderResources[] = yield call(fetchFolders, payload);
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
}
