import { State } from 'models';

const mockStore: State = {
  entities: {
    careReceivers: {
      '8e3900e8-58a3-45d9-92e5-10d894016bd7': {
        id: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
        name: '左藤太郎',
        birth: '76歳 1941年1月15日生',
      },
      '16208045-2674-437d-a01d-d72e28c2017c': {
        id: '16208045-2674-437d-a01d-d72e28c2017c',
        name: '左藤二郎',
        birth: '76歳 1941年2月13日生',
      },
    },
    folders: {
      'a0d45fb9-ea6d-48df-af7b-9f5af2329f39': {
        id: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
        careReceiverId: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
        name: '病歴やアレルギーなど',
      },
      '71f24b4d-8816-4563-8526-a257f0bed1a2': {
        id: '71f24b4d-8816-4563-8526-a257f0bed1a2',
        careReceiverId: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
        name: 'お薬情報',
      },
      '6e3cade5-b650-4624-b508-927c9e616100': {
        id: '6e3cade5-b650-4624-b508-927c9e616100',
        careReceiverId: '16208045-2674-437d-a01d-d72e28c2017c',
        name: '病歴やアレルギーなど',
      },
      'aa450af8-0102-463b-889e-85b1971b4576': {
        id: 'aa450af8-0102-463b-889e-85b1971b4576',
        careReceiverId: '16208045-2674-437d-a01d-d72e28c2017c',
        name: 'お薬情報',
      },
    },
    folderContents: {
      'c430c8ef-868f-4189-9e53-c64151882e40': {
        id: 'c430c8ef-868f-4189-9e53-c64151882e40',
        folderId: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
        title: 'アレルギー',
        content: 'カニ、エビ',
      },
      '7145db67-df4d-4df2-9747-8ffbcf4dff68': {
        id: '7145db67-df4d-4df2-9747-8ffbcf4dff68',
        folderId: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
        title: '病歴',
        content: '脳梗塞（２００８年９月）',
      },
      '5acc7474-361b-4921-a8e9-a114a7fb1090': {
        id: '5acc7474-361b-4921-a8e9-a114a7fb1090',
        folderId: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
        title: '鎮痛薬',
        content: 'モルヒネ',
      },
      '44cf623e-ab42-429f-8fdb-6777a69e2cc7': {
        id: '44cf623e-ab42-429f-8fdb-6777a69e2cc7',
        folderId: '71f24b4d-8816-4563-8526-a257f0bed1a2',
        title: 'アレルギー',
        content: 'カニ、エビ',
      },
      'a653ca1d-0783-41ae-ae90-c88b3030ba67': {
        id: 'a653ca1d-0783-41ae-ae90-c88b3030ba67',
        folderId: '6e3cade5-b650-4624-b508-927c9e616100',
        title: '病歴',
        content: '脳梗塞（２００８年９月）',
      },
      '3bb7ad00-180d-41f5-83f4-62b9d26483f4': {
        id: '3bb7ad00-180d-41f5-83f4-62b9d26483f4',
        folderId: 'aa450af8-0102-463b-889e-85b1971b4576',
        title: '鎮痛薬',
        content: 'モルヒネ',
      },
    },
  },
};

export default mockStore;
