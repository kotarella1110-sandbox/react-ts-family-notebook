import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from 'store/configure';
import App from 'components/App';

const history = createBrowserHistory();

const store = configureStore({}, history);

const renderApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

const root = document.getElementById('root') as HTMLElement;
render(renderApp(), root);
