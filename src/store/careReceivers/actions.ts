import actionCreatorFactory from 'typescript-fsa';
import * as schemas from '../schemas';
import { CareReceivers, Folders } from 'models';

const actionCreator = actionCreatorFactory('careRedceivers');

export const FETCH: string = 'fetch';

export interface FetchCareReceiversPayload {}
export interface FetchCareReceiversResult {
  entities: {
    careReceivers: CareReceivers;
    folders?: Folders;
  };
  result: number[];
}

export const fetchCareReceivers = actionCreator.async<
  FetchCareReceiversPayload,
  FetchCareReceiversResult
>(FETCH, {
  schema: [schemas.careReceiver],
});
