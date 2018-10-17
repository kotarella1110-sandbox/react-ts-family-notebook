import { combineReducers } from 'redux';
import { optimistic } from 'redux-optimistic-ui';
import entities from './entities/reducer';

const reducers = {
  entities: optimistic(entities),
};

export default combineReducers(reducers);
