import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { merge } from 'lodash';
import { CareReceiversEntities } from 'models';
import * as actions from 'store/actions';

const initialState: CareReceiversEntities['byId'] = {};

const byId = reducerWithInitialState(initialState)
  .case(
    actions.fetchCareReceivers.done,
    (
      state,
      {
        result: {
          entities: { careReceivers },
        },
      }
    ) => merge({}, state, careReceivers) // careReceiver.folders も deepmerge したいため
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
  )
  .case(
    actions.deleteFolder.done,
    (state, { result: { id, careReceiverId } }) => {
      const folders = state[careReceiverId].folders || [];
      return {
        ...state,
        [careReceiverId]: {
          ...state[careReceiverId],
          folders: folders.filter(folderId => folderId !== id),
        },
      };
    }
  );

export default byId;
