import { SagaIterator } from 'redux-saga';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { Action } from 'typescript-fsa';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';
import { normalize } from 'normalizr';
import { CareReceiver } from 'models';
import * as schema from 'store/schema';
import * as actions from './actions';
import * as folderActions from 'store/folders/actions';

const getCareReceivers = (payload: { careReceiverId: number }) =>
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

function* fetchFolders({ payload }: Action<any>): SagaIterator {
  if (!payload.result.entities.folders) {
    yield all(
      payload.result.result.map((careReceiverId: number) =>
        put(folderActions.fetchFolders.started({ careReceiverId }))
      )
    );
  }
}

function* fetchCareReceivers({
  payload,
}: Action<{ careReceiverId: number }>): SagaIterator {
  yield call(
    bindAsyncAction(actions.fetchCareReceivers, { skipStartedAction: true })(
      function*(payload): SagaIterator {
        const careReceivers: CareReceiver[] = yield call(
          getCareReceivers,
          payload
        );
        const normalizedCareReceivers = normalize(careReceivers, [
          schema.careReceiver,
        ]);
        return normalizedCareReceivers;
      }
    ),
    payload
  );
}

export default function* watcher(): SagaIterator {
  yield takeEvery(actions.fetchCareReceivers.started.type, fetchCareReceivers);
  yield takeEvery(actions.fetchCareReceivers.done.type, fetchFolders);
}
