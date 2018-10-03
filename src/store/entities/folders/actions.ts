import actionCreatorFactory from 'typescript-fsa';
import * as schemas from 'store/schemas';
import { FoldersEntities } from 'models';

const actionCreator = actionCreatorFactory('folders');

export const fetchFolders = actionCreator.async<
  {
    careReceiverId: number;
  },
  {
    entities: {
      folders: FoldersEntities;
    };
    result: number[];
  }
>('FETCH', {
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
>('ADD');

export const editFolder = actionCreator<{
  id: number;
  careReceiverId: number;
  name: string;
}>('EDIT');

export const deleteFolder = actionCreator<{
  id: number;
  careReceiverId: number;
}>('DELETE');
