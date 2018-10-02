import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import careReceivers from './careReceivers/reducer';
import folders from './folders/reducer';
import { Entities } from 'models';
// import * as actions from 'store/actions';

const initialState: Entities = {
  careReceivers: {},
  folders: {},
};

const entities = reduceReducers(
  combineReducers({
    careReceivers,
    folders,
  }),
  // cross-cutting concerns because here `state` is the whole state tree
  reducerWithInitialState(initialState)
);

export default entities;
