import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { CareReceiversEntities } from 'models';
import * as actions from 'store/actions';

const initialState: CareReceiversEntities = {};

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
    ) => ({
      ...state,
      ...careReceivers,
    })
  )
  .case(
    actions.fetchFolders.done,
    (state, { params: { careReceiverId }, result: { result } }) => ({
      ...state,
      [careReceiverId]: {
        ...state[careReceiverId],
        folders: result,
      },
    })
  )
  .case(
    actions.addFolder.done,
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
