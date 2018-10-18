import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { FolderContentsEntities } from 'models';
import * as actions from 'store/actions';

const initialState: FolderContentsEntities['allIds'] = [];

const folderContents = reducerWithInitialState(initialState)
  .case(
    actions.fetchFolderContents.done,
    (state, { result: { result } }) => result
  )
  .case(actions.addFolderContent.done, (state, { result: { id } }) => [
    ...state,
    id,
  ])
  .case(actions.deleteFolderContent.done, (state, { result: { id } }) =>
    state.filter(folderContentId => folderContentId !== id)
  );

export default folderContents;
