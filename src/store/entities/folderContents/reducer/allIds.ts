import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { FolderContentsEntities } from 'models';
import * as actions from 'store/actions';

const initialState: FolderContentsEntities['allIds'] = [];

const folderContents = reducerWithInitialState(initialState)
  .case(
    // TODO: 全 folderContents の id ではなく folderId ごとの id のため、修正する必要あり
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
