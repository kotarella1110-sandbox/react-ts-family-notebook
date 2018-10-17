import { v4 as uuid } from 'uuid';
import { FolderContentResources } from 'models';
import * as actions from 'store/actions';
import { delay } from '.';

export const folderContents: ReadonlyArray<FolderContentResources> = [
  {
    id: 'c430c8ef-868f-4189-9e53-c64151882e40',
    folderId: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
    title: 'アレルギー',
    content: 'カニ、エビ',
  },
  {
    id: '7145db67-df4d-4df2-9747-8ffbcf4dff68',
    folderId: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
    title: '病歴',
    content: '脳梗塞（２００８年９月）',
  },
  {
    id: '5acc7474-361b-4921-a8e9-a114a7fb1090',
    folderId: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
    title: '鎮痛薬',
    content: 'モルヒネ',
  },
  {
    id: '44cf623e-ab42-429f-8fdb-6777a69e2cc7',
    folderId: '71f24b4d-8816-4563-8526-a257f0bed1a2',
    title: 'アレルギー',
    content: 'カニ、エビ',
  },
  {
    id: 'a653ca1d-0783-41ae-ae90-c88b3030ba67',
    folderId: '6e3cade5-b650-4624-b508-927c9e616100',
    title: '病歴',
    content: '脳梗塞（２００８年９月）',
  },
  {
    id: '3bb7ad00-180d-41f5-83f4-62b9d26483f4',
    folderId: 'aa450af8-0102-463b-889e-85b1971b4576',
    title: '鎮痛薬',
    content: 'モルヒネ',
  },
];

export const fetchFolderContents = (
  payload: ReturnType<typeof actions.fetchFolderContents.started>['payload']
) =>
  delay(500).then(() => {
    if (Math.random() > 1) {
      throw new Error();
    }
    return folderContents.filter(
      folderContent => folderContent.folderId === payload.folderId
    );
  });

export const addFolderContent = (
  payload: ReturnType<typeof actions.addFolderContent.started>['payload']
) =>
  delay(500).then(() => {
    if (Math.random() > 1) {
      throw new Error();
    }
    return {
      id: uuid(),
      ...payload,
    };
  });

export const editFolderContent = (
  payload: ReturnType<typeof actions.editFolderContent.started>['payload']
) =>
  delay(500).then(() => {
    if (Math.random() > 1) {
      throw new Error();
    }
    return payload;
  });

export const deleteFolderContent = (
  payload: ReturnType<typeof actions.deleteFolderContent.started>['payload']
) =>
  delay(500).then(() => {
    if (Math.random() > 1) {
      throw new Error();
    }
    return payload;
  });
