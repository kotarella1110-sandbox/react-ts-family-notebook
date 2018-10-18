import { SagaIterator } from 'redux-saga';
import { call, takeEvery } from 'redux-saga/effects';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';
import * as actions from 'store/actions';
import { fetchCareReceivers } from 'services/api';

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
}
