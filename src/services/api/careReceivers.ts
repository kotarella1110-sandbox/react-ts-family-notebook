import * as actions from 'store/actions';
import * as fakeDatabase from './fakeDatabase';
import { delay } from '.';

export const fetchCareReceivers = (
  payload: ReturnType<typeof actions.fetchCareReceivers.started>['payload']
) =>
  delay(500).then(() => {
    if (Math.random() > 1) {
      throw new Error();
    }
    return fakeDatabase.careReceivers;
  });
