import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { CareReceiversEntities } from 'models';
import * as actions from 'store/actions';

const initialState: CareReceiversEntities['allIds'] = [];

const allIds = reducerWithInitialState(initialState).case(
  actions.fetchCareReceivers.done,
  (state, { result: { result } }) => result
);

export default allIds;
