import { CareReceiverResources } from 'models';
import * as actions from 'store/actions';
import { delay } from '.';

const careReceivers: ReadonlyArray<CareReceiverResources> = [
  {
    id: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
    name: '左藤太郎',
    birth: '76歳 1941年1月15日生',
  },
  {
    id: '16208045-2674-437d-a01d-d72e28c2017c',
    name: '左藤二郎',
    birth: '76歳 1941年2月13日生',
  },
];

export const fetchCareReceivers = (
  payload: ReturnType<typeof actions.fetchCareReceivers.started>['payload']
) =>
  delay(500).then(() => {
    if (Math.random() > 1) {
      throw new Error();
    }
    return careReceivers;
  });
