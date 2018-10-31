import { SagaIterator } from 'redux-saga';
import { all, put, call /*, select */, takeEvery } from 'redux-saga/effects';
import { Action } from 'typescript-fsa';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';
import { CareReceiverEntities } from 'models';
import * as actions from 'store/actions';
// import { getCareReceivers } from 'store/selectors';
import { fetchCareReceivers } from 'services/api';

function* fetchCareReceiversWorker({
  payload,
}: ReturnType<typeof actions.fetchCareReceivers.done>): SagaIterator {
  // state が空でない場合 API にリクエストを投げない
  // const careReceiver = yield select(getCareReceivers);
  // if (careReceiver.length > 0) {
  //   return;
  // }
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

export default function* watcher(): SagaIterator {
  yield takeEvery(
    actions.fetchCareReceivers.started.type,
    fetchCareReceiversWorker
  );
  yield takeEvery(actions.fetchCareReceivers.done.type, fetchFoldersWorker);
}
