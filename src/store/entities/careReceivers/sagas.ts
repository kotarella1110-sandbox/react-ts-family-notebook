import { SagaIterator } from 'redux-saga';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { Action } from 'typescript-fsa';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';
import { CareReceiverResources } from 'models';
import * as actions from 'store/actions';

const careReceivers: CareReceiverResources[] = [
  {
    id: 0,
    name: '左藤太郎',
    birth: '76歳 1941年1月15日生',
  },
  {
    id: 1,
    name: '左藤二郎',
    birth: '76歳 1941年2月13日生',
  },
];

const fetchCareReceivers = (
  payload: ReturnType<typeof actions.fetchCareReceivers.done>['payload']
) =>
  new Promise<CareReceiverResources[]>(resolve =>
    setTimeout(() => resolve(careReceivers), 10)
  );

function* fetchFoldersWorker({
  payload: {
    result: { entities, result },
  },
}: Action<any>): SagaIterator {
  yield all(
    result.map((careReceiverId: number) => {
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
        const careReceivers: CareReceiverResources[] = yield call(
          fetchCareReceivers,
          payload
        );
        return careReceivers;
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
