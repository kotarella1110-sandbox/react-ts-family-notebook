import actionCreatorFactory from 'typescript-fsa';
import * as schemas from 'store/schemas';
import { CareReceiversEntities, FoldersEntities } from 'models';

const actionCreator = actionCreatorFactory('careRedceivers');

export const fetchCareReceivers = actionCreator.async<
  {},
  {
    readonly entities: {
      readonly careReceivers: CareReceiversEntities;
      readonly folders?: FoldersEntities;
    };
    readonly result: ReadonlyArray<number>;
  }
>('FETCH', {
  schema: [schemas.careReceiver],
});
