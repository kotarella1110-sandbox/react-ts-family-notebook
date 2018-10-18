import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { FoldersEntities } from 'models';
import * as actions from 'store/actions';

const initialState: FoldersEntities['allIds'] = [];

const allIds = reducerWithInitialState(initialState)
  .case(actions.fetchFolders.done, (state, { result: { result } }) => result)
  .case(actions.addFolder.done, (state, { result: { id } }) => [...state, id])
  .case(actions.deleteFolder.done, (state, { result: { id } }) =>
    state.filter(folderId => folderId !== id)
  );

export default allIds;
