import { Store, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import config from 'config';
import middlewares from './middlewares';
import reducer from './reducer';
import sagas from './sagas';

const devtools: any =
  config.isDev && config.isBrowser && (window as any).devToolsExtension
    ? (window as any).devToolsExtension
    : () => (fn: any) => fn;

const configureStore = (initialState: object = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const enhancers = [
    applyMiddleware(...middlewares, sagaMiddleware),
    devtools(),
  ];

  const store: Store = createStore(
    reducer,
    initialState,
    compose(...enhancers)
  );

  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore;
