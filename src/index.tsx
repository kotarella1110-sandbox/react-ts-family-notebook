import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store/configure';
import App from 'components/App';

const store = configureStore();

const renderApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const root = document.getElementById('root') as HTMLElement;
render(renderApp(), root);
