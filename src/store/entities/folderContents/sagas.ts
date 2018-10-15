import { SagaIterator } from 'redux-saga';
import { call, takeEvery } from 'redux-saga/effects';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';
import * as actions from 'store/actions';
import * as api from 'services/api';

function* fetchFolderContentsWorker({
  payload,
}: ReturnType<typeof actions.fetchFolderContents.started>): SagaIterator {
  yield call(
    bindAsyncAction(actions.fetchFolderContents, { skipStartedAction: true })(
      function*(payload): SagaIterator {
        const folderContents = yield call(api.fetchFolderContents, payload);
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
        const result = yield call(api.addFolderContent, payload);
        return result;
      }
    ),
    payload
  );
}

function* editFolderContentWorker({
  payload,
}: ReturnType<typeof actions.editFolderContent.started>) {
  yield call(
    bindAsyncAction(actions.editFolderContent, { skipStartedAction: true })(
      function*(payload): SagaIterator {
        const result = yield call(api.editFolderContent, payload);
        return result;
      }
    ),
    payload
  );
}

function* deleteFolderContentWorker({
  payload,
}: ReturnType<typeof actions.deleteFolderContent.started>) {
  yield call(
    bindAsyncAction(actions.deleteFolderContent, { skipStartedAction: true })(
      function*(payload): SagaIterator {
        const result = yield call(api.deleteFolderContent, payload);
        return result;
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
  yield takeEvery(
    actions.editFolderContent.started.type,
    editFolderContentWorker
  );
  yield takeEvery(
    actions.deleteFolderContent.started.type,
    deleteFolderContentWorker
  );
}
