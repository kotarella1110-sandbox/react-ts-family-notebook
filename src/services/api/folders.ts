import { v4 as uuid } from 'uuid';
import * as actions from 'store/actions';
import * as fakeDatabase from './fakeDatabase';
import { delay } from '.';

export const fetchFolders = (
  payload: ReturnType<typeof actions.fetchFolders.started>['payload']
) =>
  delay(500).then(() => {
    if (Math.random() > 1) {
      throw new Error();
    }
    return fakeDatabase.folders.filter(
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
    const folder = {
      id: uuid(),
      ...payload,
    };
    fakeDatabase.folders.push(folder);
    return folder;
  });

export const editFolder = (
  payload: ReturnType<typeof actions.editFolder.started>['payload']
) =>
  delay(500).then(() => {
    if (Math.random() > 0.7) {
      throw new Error();
    }
    const index = fakeDatabase.folders.findIndex(
      folder => folder.id === payload.id
    );
    // tslint:disable-next-line:no-object-mutation
    fakeDatabase.folders[index] = {
      ...fakeDatabase.folders[index],
      ...payload,
    };
    return payload;
  });

export const deleteFolder = (
  payload: ReturnType<typeof actions.deleteFolder.started>['payload']
) =>
  delay(500).then(() => {
    if (Math.random() > 0.7) {
      throw new Error();
    }
    const index = fakeDatabase.folders.findIndex(
      folder => folder.id === payload.id
    );
    // tslint:disable-next-line:no-object-mutation no-delete
    delete fakeDatabase.folders[index];
    return payload;
  });
