import { reducerWithInitialState } from 'typescript-fsa-reducers';
// import { CareReceiver } from 'models';
import * as actions from './actions';
import * as foldersActions from 'store/folders/actions';

const initialState = {};

const careReceivers = reducerWithInitialState(initialState)
  .case(actions.fetchCareReceivers.done, (state, { result }) => {
    return result.entities.careReceivers;
  })
  .case(foldersActions.fetchFolders.done, (state, { params, result }) => {
    return {
      ...state,
      [params.careReceiverId]: {
        ...state[params.careReceiverId],
        folders: result.result,
      },
    };
  })
  .case(foldersActions.addFolder.done, (state, { params, result: { id } }) => {
    return {
      ...state,
      [params.careReceiverId]: {
        ...state[params.careReceiverId],
        folders: state[params.careReceiverId].folders.concat(id),
      },
    };
  });

export default careReceivers;
