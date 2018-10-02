import actionCreatorFactory from 'typescript-fsa';
import * as schemas from 'store/schemas';
import { Folders } from 'models';

const actionCreator = actionCreatorFactory('folders');

const FETCH: string = 'fetch';
const ADD: string = 'add';
const EDIT: string = 'edit';
const DELETE: string = 'delete';

export interface FetchFolderPayload {
  careReceiverId: number;
}
export interface FetchFolderResult {
  entities: {
    folders: Folders;
  };
  result: number[];
}
export interface AddFolderPayload {
  careReceiverId: number;
  name: string;
}
export interface AddFolderResult {
  id: number;
  careReceiverId: number;
  name: string;
}
export interface EditFolderPayload {
  id: number;
  careReceiverId: number;
  name: string;
}
export interface DeleteFolderPayload {
  id: number;
  careReceiverId: number;
}

export const fetchFolders = actionCreator.async<
  FetchFolderPayload,
  FetchFolderResult
>(FETCH, {
  schema: [schemas.folder],
});
export const addFolder = actionCreator.async<AddFolderPayload, AddFolderResult>(
  ADD
);
export const editFolder = actionCreator<EditFolderPayload>(EDIT);
export const deleteFolder = actionCreator<DeleteFolderPayload>(DELETE);
