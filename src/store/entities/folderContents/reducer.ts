import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { FolderContentsEntities } from 'models';
import * as actions from 'store/actions';

const initialState: FolderContentsEntities = {};

const folderContents = reducerWithInitialState(initialState)
  .case(
    actions.fetchFolderContents.done,
    (
      state,
      {
        result: {
          entities: { folderContents },
        },
      }
    ) => ({
      ...state,
      ...folderContents,
    })
  )
  .case(
    actions.addFolderContent.done,
    (state, { result: { id, folderId, title, content } }) => ({
      ...state,
      [id]: {
        id,
        folderId,
        title,
        content,
      },
    })
  )
  .case(
    actions.editFolderContent.done,
    (state, { result: { id, title, content } }) =>
      state[id]
        ? {
            ...state,
            [id]: {
              ...state[id],
              title,
              content,
            },
          }
        : state
  )
  .case(actions.deleteFolderContent.done, (state, { result: { id } }) => {
    const { [id]: _, ...newState } = state;
    return newState;
  });

export default folderContents;
