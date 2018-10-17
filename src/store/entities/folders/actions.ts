import actionCreatorFactory from 'typescript-fsa';
import * as schemas from 'store/schemas';
import { CareReceiverEntities, FolderEntities, FoldersEntities } from 'models';

const actionCreator = actionCreatorFactory('folders');

export const fetchFolders = actionCreator.async<
  {
    readonly careReceiverId: CareReceiverEntities['id'];
  },
  {
    readonly entities: {
      readonly folders: FoldersEntities;
    };
    readonly result: ReadonlyArray<FolderEntities['id']>;
  }
>('FETCH', {
  schema: [schemas.folder],
});

export const addFolder = actionCreator.async<
  {
    readonly careReceiverId: CareReceiverEntities['id'];
    readonly name: FolderEntities['name'];
  },
  {
    readonly id: FolderEntities['id'];
    readonly careReceiverId: CareReceiverEntities['id'];
    readonly name: FolderEntities['name'];
  }
>('ADD');

export const editFolder = actionCreator.async<
  {
    readonly id: FolderEntities['id'];
    readonly careReceiverId: CareReceiverEntities['id'];
    readonly name: FolderEntities['name'];
  },
  {
    readonly id: FolderEntities['id'];
    readonly careReceiverId: CareReceiverEntities['id'];
    readonly name: FolderEntities['name'];
  }
>('EDIT');

export const deleteFolder = actionCreator.async<
  {
    readonly id: FolderEntities['id'];
    readonly careReceiverId: CareReceiverEntities['id'];
  },
  {
    readonly id: FolderEntities['id'];
    readonly careReceiverId: CareReceiverEntities['id'];
  }
>('DELETE');
