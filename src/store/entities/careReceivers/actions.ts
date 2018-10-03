import actionCreatorFactory from 'typescript-fsa';
import * as schemas from 'store/schemas';
import { CareReceiversEntities, FoldersEntities } from 'models';

const actionCreator = actionCreatorFactory('careRedceivers');

const FETCH: string = 'fetch';

export interface FetchCareReceiversPayload {}
export interface FetchCareReceiversResult {
  entities: {
    careReceivers: CareReceiversEntities;
    folders?: FoldersEntities;
  };
  result: number[];
}

export const fetchCareReceivers = actionCreator.async<
  FetchCareReceiversPayload,
  FetchCareReceiversResult
>(FETCH, {
  schema: [schemas.careReceiver],
});
