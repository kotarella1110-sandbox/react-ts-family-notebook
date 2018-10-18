import actionCreatorFactory from 'typescript-fsa';
import * as schemas from 'store/schemas';
import {
  FolderEntities,
  FolderContentEntities,
  FolderContentsEntities,
} from 'models';

const actionCreator = actionCreatorFactory('folderContents');

export const fetchFolderContents = actionCreator.async<
  {
    readonly folderId: FolderEntities['id'];
  },
  {
    readonly entities: {
      readonly folderContents: FolderContentsEntities['byId'];
    };
    readonly result: FolderContentsEntities['allIds'];
  }
>('FETCH', {
  schema: [schemas.folderContent],
});

export const addFolderContent = actionCreator.async<
  {
    readonly folderId: FolderEntities['id'];
    readonly title: FolderContentEntities['title'];
    readonly content: FolderContentEntities['content'];
  },
  {
    readonly id: FolderContentEntities['id'];
    readonly folderId: FolderEntities['id'];
    readonly title: FolderContentEntities['title'];
    readonly content: FolderContentEntities['content'];
  }
>('ADD');

export const editFolderContent = actionCreator.async<
  {
    readonly id: FolderContentEntities['id'];
    readonly folderId: FolderEntities['id'];
    readonly title: FolderContentEntities['title'];
    readonly content: FolderContentEntities['content'];
  },
  {
    readonly id: FolderContentEntities['id'];
    readonly folderId: FolderEntities['id'];
    readonly title: FolderContentEntities['title'];
    readonly content: FolderContentEntities['content'];
  }
>('EDIT');

export const deleteFolderContent = actionCreator.async<
  {
    readonly id: FolderContentEntities['id'];
    readonly folderId: FolderEntities['id'];
  },
  {
    readonly id: FolderContentEntities['id'];
    readonly folderId: FolderEntities['id'];
  }
>('DELETE');
