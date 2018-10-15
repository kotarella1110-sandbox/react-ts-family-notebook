import { SagaIterator } from 'redux-saga';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { Action } from 'typescript-fsa';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';
import { CareReceiverEntities } from 'models';
import * as actions from 'store/actions';
import { fetchCareReceivers } from 'services/api';

function* fetchFoldersWorker({
  payload: {
    result: { entities, result },
  },
}: Action<any>): SagaIterator {
  yield all(
    result.map((careReceiverId: CareReceiverEntities['id']) => {
      if (!entities.careReceivers[careReceiverId].folders) {
        return put(actions.fetchFolders.started({ careReceiverId }));
      }
      return null;
    })
  );
}

function* fetchCareReceiversWorker({
  payload,
}: ReturnType<typeof actions.fetchCareReceivers.done>): SagaIterator {
  yield call(
    bindAsyncAction(actions.fetchCareReceivers, { skipStartedAction: true })(
      function*(payload): SagaIterator {
        const result = yield call(fetchCareReceivers, payload);
        return result;
      }
    ),
    payload
  );
}

export default function* watcher(): SagaIterator {
  yield takeEvery(
    actions.fetchCareReceivers.started.type,
    fetchCareReceiversWorker
  );
  yield takeEvery(actions.fetchCareReceivers.done.type, fetchFoldersWorker);
}
