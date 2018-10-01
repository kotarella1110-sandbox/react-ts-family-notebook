import actionCreatorFactory from 'typescript-fsa';
import * as schemas from '../schemas';
// import { Folder } from 'models';

const actionCreator = actionCreatorFactory('folders');

export const FETCH: string = 'fetch';
export const ADD: string = 'add';
export const EDIT: string = 'edit';
export const DELETE: string = 'delete';

export const fetchFolders = actionCreator.async<
  { careReceiverId: number },
  {
    entities: {
      folders: any;
    };
    result: any;
  }
>(FETCH, {
  schema: [schemas.folder],
});
export const addFolder = actionCreator.async<
  {
    careReceiverId: number;
    name: string;
  },
  {
    id: number;
    careReceiverId: number;
    name: string;
  }
>(ADD);
export const editFolder = actionCreator<{
  id: number;
  careReceiverId: number;
  name: string;
}>(EDIT);
export const deleteFolder = actionCreator<{
  id: number;
  careReceiverId: number;
}>(DELETE);
