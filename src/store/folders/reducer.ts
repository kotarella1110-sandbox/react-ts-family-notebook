import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Folders } from 'models';
import * as actions from 'store/actions';

const initialState: Folders = {};

const folders = reducerWithInitialState(initialState)
  .case(
    actions.fetchFolders.done,
    (
      state,
      {
        result: {
          entities: { folders },
        },
      }
    ) => {
      return {
        ...state,
        ...folders,
      };
    }
  )
  .case(
    actions.addFolder.done,
    (state, { result: { id, careReceiverId, name } }) => {
      return {
        ...state,
        [id]: {
          id,
          careReceiverId,
          name,
        },
      };
    }
  )
  .case(actions.editFolder, (state, { id, name }) => {
    return {
      ...state,
      [id]: {
        ...state[id],
        name,
      },
    };
  })
  .case(actions.deleteFolder, (state, { id }) => {
    return Object.keys(state)
      .filter(folderId => Number(folderId) !== id)
      .reduce((result, folderId) => {
        result[folderId] = state[folderId];
        return result;
      }, {});
  })
  .case(
    actions.fetchCareReceivers.done,
    (
      state,
      {
        result: {
          entities: { folders },
        },
      }
    ) => {
      return folders || state;
    }
  );

export default folders;
