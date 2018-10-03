import { SagaIterator } from 'redux-saga';
import { call, select, takeEvery } from 'redux-saga/effects';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';
import { FolderContentsEntities } from 'models';
import { getFolderContents } from './selectors';
import * as actions from 'store/actions';
import { folderContents } from 'store/resources';

const fetchFolderContents = (
  payload: ReturnType<typeof actions.fetchFolderContents.started>['payload']
) =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve(
          folderContents.filter(
            folderContent => folderContent.folderId === payload.folderId
          )
        ),
      10
    )
  );

function* fetchFolderContentsWorker({
  payload,
}: ReturnType<typeof actions.fetchFolderContents.started>): SagaIterator {
  yield call(
    bindAsyncAction(actions.fetchFolderContents, { skipStartedAction: true })(
      function*(payload): SagaIterator {
        const folderContents = yield call(fetchFolderContents, payload);
        return folderContents;
      }
    ),
    payload
  );
}

function* addFolderContentWorker({
  payload,
}: ReturnType<typeof actions.addFolderContent.started>) {
  yield call(
    bindAsyncAction(actions.addFolderContent, { skipStartedAction: true })(
      function*(payload): SagaIterator {
        const state: FolderContentsEntities = yield select(getFolderContents);
        return {
          ...payload,
          id:
            Object.keys(state).reduce(
              (maxId, id) => Math.max(Number(id), maxId),
              -1
            ) + 1,
        };
      }
    ),
    payload
  );
}

export default function* watcher(): SagaIterator {
  yield takeEvery(
    actions.fetchFolderContents.started.type,
    fetchFolderContentsWorker
  );
  yield takeEvery(
    actions.addFolderContent.started.type,
    addFolderContentWorker
  );
}
