import { SagaIterator } from 'redux-saga';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { Action } from 'typescript-fsa';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';
import { CareReceiver } from 'models';
import * as actions from './actions';
import * as folderActions from 'store/folders/actions';

const fetchCareReceivers = (payload: actions.FetchCareReceiversPayload) =>
  new Promise<CareReceiver[]>(resolve =>
    setTimeout(
      () =>
        resolve([
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
        ]),
      10
    )
  );

function* fetchFoldersWorker({ payload }: Action<any>): SagaIterator {
  if (!payload.result.entities.folders) {
    yield all(
      payload.result.result.map((careReceiverId: number) =>
        put(folderActions.fetchFolders.started({ careReceiverId }))
      )
    );
  }
}

function* fetchCareReceiversWorker({
  payload,
}: Action<actions.FetchCareReceiversPayload>): SagaIterator {
  yield call(
    bindAsyncAction(actions.fetchCareReceivers, { skipStartedAction: true })(
      function*(payload): SagaIterator {
        const careReceivers: CareReceiver[] = yield call(
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
