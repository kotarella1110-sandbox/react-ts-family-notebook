import { v4 as uuid } from 'uuid';
import * as actions from 'store/actions';
import * as fakeDatabase from './fakeDatabase';
import { delay } from '.';

export const fetchFolderContents = (
  payload: ReturnType<typeof actions.fetchFolderContents.started>['payload']
) =>
  delay(500).then(() => {
    if (Math.random() > 1) {
      throw new Error();
    }
    return fakeDatabase.folderContents.filter(
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
    const folderContent = {
      id: uuid(),
      ...payload,
    };
    fakeDatabase.folderContents.push(folderContent);
    return folderContent;
  });

export const editFolderContent = (
  payload: ReturnType<typeof actions.editFolderContent.started>['payload']
) =>
  delay(500).then(() => {
    if (Math.random() > 1) {
      throw new Error();
    }
    const index = fakeDatabase.folderContents.findIndex(
      folderContent => folderContent.id === payload.id
    );
    // tslint:disable-next-line:no-object-mutation
    fakeDatabase.folderContents[index] = {
      ...fakeDatabase.folderContents[index],
      ...payload,
    };
    return payload;
  });

export const deleteFolderContent = (
  payload: ReturnType<typeof actions.deleteFolderContent.started>['payload']
) =>
  delay(500).then(() => {
    if (Math.random() > 1) {
      throw new Error();
    }
    const index = fakeDatabase.folderContents.findIndex(
      folderContent => folderContent.id === payload.id
    );
    // tslint:disable-next-line:no-object-mutation no-delete
    delete fakeDatabase.folderContents[index];
    return payload;
  });
