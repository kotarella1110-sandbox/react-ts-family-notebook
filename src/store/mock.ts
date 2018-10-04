import { State } from 'models';

const mockStore: State = {
  entities: {
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
    folderContents: {
      0: {
        id: 0,
        folderId: 0,
        title: 'アレルギー',
        content: 'カニ、エビ',
      },
      1: {
        id: 1,
        folderId: 0,
        title: '病歴',
        content: '脳梗塞（２００８年９月）',
      },
      2: {
        id: 2,
        folderId: 0,
        title: '鎮痛薬',
        content: 'モルヒネ',
      },
      3: {
        id: 3,
        folderId: 1,
        title: 'アレルギー',
        content: 'カニ、エビ',
      },
      4: {
        id: 4,
        folderId: 2,
        title: '病歴',
        content: '脳梗塞（２００８年９月）',
      },
      5: {
        id: 5,
        folderId: 3,
        title: '鎮痛薬',
        content: 'モルヒネ',
      },
    },
  },
};

export default mockStore;
