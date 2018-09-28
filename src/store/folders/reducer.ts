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
  // .case(actions.editFolder, (state, { id, name }) => {
  //   return state.map(
  //     folder => (folder.id === id ? { ...folder, name } : folder)
  //   );
  // })
  // .case(actions.deleteFolder, (state, { id }) => {
  //   return state.filter(folder => folder.id !== id);
  // })
  .case(careReceiversActions.fetchCareReceivers.done, (state, { result }) => {
    return result.entities.folders || state;
  });

export default folders;
