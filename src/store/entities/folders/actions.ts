import actionCreatorFactory from 'typescript-fsa';
import * as schemas from 'store/schemas';
import { CareReceiverEntities, FolderEntities, FoldersEntities } from 'models';

const actionCreator = actionCreatorFactory('folders');

export const fetchFolders = actionCreator.async<
  {
    careReceiverId: CareReceiverEntities['id'];
  },
  {
    entities: {
      folders: FoldersEntities;
    };
    result: FolderEntities['id'][];
  }
>('FETCH', {
  schema: [schemas.folder],
});

export const addFolder = actionCreator.async<
  {
    careReceiverId: CareReceiverEntities['id'];
    name: FolderEntities['name'];
  },
  {
    id: FolderEntities['id'];
    careReceiverId: CareReceiverEntities['id'];
    name: FolderEntities['name'];
  }
>('ADD');

export const editFolder = actionCreator<{
  id: FolderEntities['id'];
  careReceiverId: CareReceiverEntities['id'];
  name: FolderEntities['name'];
}>('EDIT');

export const deleteFolder = actionCreator<{
  id: FolderEntities['id'];
  careReceiverId: CareReceiverEntities['id'];
}>('DELETE');
