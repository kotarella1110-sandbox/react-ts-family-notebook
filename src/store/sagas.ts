import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

const req = require.context('.', true, /\.\/.+\/sagas\.ts$/);

const sagas = req.keys().map(key => req(key).default);

export default function* rootSaga(services = {}): SagaIterator {
  yield all(sagas.map(saga => fork(saga)));
}
