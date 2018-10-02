import { State } from 'models';

const mockStore: State = {
  careReceivers: {},
  folders: {
    0: {
      id: 0,
      careReceiverId: 0,
      name: '病歴やアレルギーなど',
    },
    1: {
      id: 1,
      careReceiverId: 0,
      name: 'お薬情報',
    },
    2: {
      id: 2,
      careReceiverId: 1,
      name: '病歴やアレルギーなど',
    },
    3: {
      id: 3,
      careReceiverId: 1,
      name: 'お薬情報',
    },
  },
};

export default mockStore;
