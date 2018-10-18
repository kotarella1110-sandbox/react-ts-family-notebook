import { combineReducers } from 'redux';
import byId from './byId';
import allIds from './allIds';

const folderContents = combineReducers({
  byId,
  allIds,
});

export default folderContents;
