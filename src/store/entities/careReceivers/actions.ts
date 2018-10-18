import actionCreatorFactory from 'typescript-fsa';
import * as schemas from 'store/schemas';
import { CareReceiversEntities } from 'models';

const actionCreator = actionCreatorFactory('careRedceivers');

export const fetchCareReceivers = actionCreator.async<
  {},
  {
    readonly entities: {
      readonly careReceivers: CareReceiversEntities['byId'];
    };
    readonly result: CareReceiversEntities['allIds'];
  }
>('FETCH', {
  schema: [schemas.careReceiver],
});
