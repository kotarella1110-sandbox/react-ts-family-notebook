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
    ) => ({
      ...state,
      ...folders,
    })
  )
  .case(
    actions.addFolder.done,
    (state, { result: { id, careReceiverId, name } }) => ({
      ...state,
      [id]: {
        id,
        careReceiverId,
        name,
      },
    })
  )
  .case(actions.editFolder, (state, { id, name }) => ({
    ...state,
    [id]: {
      ...state[id],
      name,
    },
  }))
  .case(actions.deleteFolder, (state, { id }) =>
    Object.keys(state)
      .filter(folderId => Number(folderId) !== id)
      .reduce((result, folderId) => {
        result[folderId] = state[folderId];
        return result;
      }, {})
  )
  .case(
    actions.fetchCareReceivers.done,
    (
      state,
      {
        result: {
          entities: { folders },
        },
      }
    ) => folders || state
  );

export default folders;
