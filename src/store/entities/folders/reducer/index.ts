import { combineReducers } from 'redux';
import byId from './byId';
import allIds from './allIds';

const folders = combineReducers({
  byId,
  allIds,
});

export default folders;
