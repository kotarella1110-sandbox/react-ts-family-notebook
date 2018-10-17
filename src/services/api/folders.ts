import { v4 as uuid } from 'uuid';
import { FolderResources } from 'models';
import * as actions from 'store/actions';
import { delay } from '.';

export const folders: ReadonlyArray<FolderResources> = [
  {
    id: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
    careReceiverId: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
    name: '病歴やアレルギーなど',
  },
  {
    id: '71f24b4d-8816-4563-8526-a257f0bed1a2',
    careReceiverId: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
    name: 'お薬情報',
  },
  {
    id: '6e3cade5-b650-4624-b508-927c9e616100',
    careReceiverId: '16208045-2674-437d-a01d-d72e28c2017c',
    name: '病歴やアレルギーなど',
  },
  {
    id: 'aa450af8-0102-463b-889e-85b1971b4576',
    careReceiverId: '16208045-2674-437d-a01d-d72e28c2017c',
    name: 'お薬情報',
  },
];

export const fetchFolders = (
  payload: ReturnType<typeof actions.fetchFolders.started>['payload']
) =>
  delay(500).then(() => {
    if (Math.random() > 1) {
      throw new Error();
    }
    return folders.filter(
      folder => folder.careReceiverId === payload.careReceiverId
    );
  });

export const addFolder = (
  payload: ReturnType<typeof actions.addFolder.started>['payload']
) =>
  delay(500).then(() => {
    if (Math.random() > 0.7) {
      throw new Error();
    }
    return {
      id: uuid(),
      ...payload,
    };
  });

export const editFolder = (
  payload: ReturnType<typeof actions.editFolder.started>['payload']
) =>
  delay(500).then(() => {
    if (Math.random() > 0.7) {
      throw new Error();
    }
    return payload;
  });

export const deleteFolder = (
  payload: ReturnType<typeof actions.deleteFolder.started>['payload']
) =>
  delay(500).then(() => {
    if (Math.random() > 0.7) {
      throw new Error();
    }
    return payload;
  });
