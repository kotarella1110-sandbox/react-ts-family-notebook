import actionCreatorFactory from 'typescript-fsa';
import * as schemas from 'store/schemas';
import { CareReceiversEntities, FoldersEntities } from 'models';

const actionCreator = actionCreatorFactory('careRedceivers');

export const fetchCareReceivers = actionCreator.async<
  {},
  {
    entities: {
      careReceivers: CareReceiversEntities;
      folders?: FoldersEntities;
    };
    result: number[];
  }
>('FETCH', {
  schema: [schemas.careReceiver],
});
