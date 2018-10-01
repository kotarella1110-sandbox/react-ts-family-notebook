import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as actions from './actions';
import * as careReceiversActions from 'store/careReceivers/actions';
// import { Folder } from 'models';

const initialState = {};

const folders = reducerWithInitialState(initialState)
  .case(actions.fetchFolders.done, (state, { result }) => {
    return {
      ...state,
      ...result.entities.folders,
    };
  })
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
  .case(careReceiversActions.fetchCareReceivers.done, (state, { result }) => {
    return result.entities.folders || state;
  });

export default folders;
