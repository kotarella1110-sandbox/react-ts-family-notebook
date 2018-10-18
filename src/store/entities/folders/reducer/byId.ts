import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { FoldersEntities } from 'models';
import * as actions from 'store/actions';

const initialState: FoldersEntities['byId'] = {};

const byId = reducerWithInitialState(initialState)
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
  .case(actions.editFolder.done, (state, { result: { id, name } }) => ({
    ...state,
    [id]: {
      ...state[id],
      name,
    },
  }))
  .case(actions.deleteFolder.done, (state, { result: { id } }) => {
    const { [id]: _, ...newState } = state;
    return newState;
  })
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
  .case(
    actions.deleteFolderContent.done,
    (state, { result: { id, folderId } }) => {
      const folderContents = state[folderId].contents || [];
      return {
        ...state,
        [folderId]: {
          ...state[folderId],
          contents: folderContents.filter(folderId => folderId !== id),
        },
      };
    }
  );

export default byId;
