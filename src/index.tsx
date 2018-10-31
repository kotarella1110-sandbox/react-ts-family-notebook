import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from 'store/configure';
import App from 'components/App';

const history = createBrowserHistory();

const store = configureStore({}, history);
const persistor = persistStore(store);
// persistor.purge(); // リロード時にローカルストレージの State を初期化

const renderApp = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

const root = document.getElementById('root') as HTMLElement;
render(renderApp(), root);
