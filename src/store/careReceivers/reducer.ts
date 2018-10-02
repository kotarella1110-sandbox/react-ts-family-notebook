import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { CareReceivers } from 'models';
import * as actions from './actions';
import * as foldersActions from 'store/folders/actions';

const initialState: CareReceivers = {};

const careReceivers = reducerWithInitialState(initialState)
  .case(
    actions.fetchCareReceivers.done,
    (
      state,
      {
        result: {
          entities: { careReceivers },
        },
      }
    ) => {
      return careReceivers;
    }
  )
  .case(
    foldersActions.fetchFolders.done,
    (state, { params: { careReceiverId }, result: { result } }) => {
      return {
        ...state,
        [careReceiverId]: {
          ...state[careReceiverId],
          folders: result,
        },
      };
    }
  )
  .case(
    foldersActions.addFolder.done,
    (state, { params: { careReceiverId }, result: { id } }) => {
      const folders = state[careReceiverId].folders || [];
      return {
        ...state,
        [careReceiverId]: {
          ...state[careReceiverId],
          folders: folders.concat(id),
        },
      };
    }
  );

export default careReceivers;
