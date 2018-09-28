import { camelCase } from 'lodash';
import { combineReducers } from 'redux';

const reducers = {};

const req = require.context('.', true, /\.\/.+\/reducer\.ts$/);

req.keys().forEach(key => {
  const storeName = camelCase(key.replace(/\.\/(.+)\/.+$/, '$1'));
  reducers[storeName] = req(key).default;
});

export default combineReducers(reducers);
