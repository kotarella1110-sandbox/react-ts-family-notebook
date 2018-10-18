import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import { reducerWithoutInitialState } from 'typescript-fsa-reducers';
import careReceivers from './careReceivers/reducer';
import folders from './folders/reducer';
import folderContents from './folderContents/reducer';
import { Entities } from 'models';
// import * as actions from 'store/actions';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const entities = reduceReducers(
  combineReducers({
    careReceivers: persistReducer(
      {
        storage,
        key: 'casreReceivers',
      },
      careReceivers
    ),
    folders: persistReducer(
      {
        storage,
        key: 'folders',
      },
      folders
    ),
    folderContents: persistReducer(
      {
        storage,
        key: 'folderContents',
      },
      folderContents
    ),
  }),
  // cross-cutting concerns because here `state` is the whole state tree
  reducerWithoutInitialState<Entities>()
);

export default entities;
