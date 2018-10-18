import { combineReducers } from 'redux';
import byId from './byId';
import allIds from './allIds';

const careReceivers = combineReducers({
  byId,
  allIds,
});

export default careReceivers;
