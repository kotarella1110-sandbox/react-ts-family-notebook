import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { FoldersEntities } from 'models';
import * as actions from 'store/actions';

const initialState: FoldersEntities = {};

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
    actions.fetchFolderContents.done,
    (state, { params: { folderId }, result: { result } }) => ({
      ...state,
      [folderId]: {
        ...state[folderId],
        contents: result,
      },
    })
  )
  .case(
    actions.addFolderContent.done,
    (state, { params: { folderId }, result: { id } }) => {
      const folderContents = state[folderId].contents || [];
      return {
        ...state,
        [folderId]: {
          ...state[folderId],
          contents: folderContents.concat(id),
        },
      };
    }
  )
  .case(actions.deleteFolderContent, (state, { id, folderId }) => {
    const folderContents = state[folderId].contents || [];
    return {
      ...state,
      [folderId]: {
        ...state[folderId],
        contents: folderContents.filter(folderId => folderId !== id),
      },
    };
  });

export default folders;
