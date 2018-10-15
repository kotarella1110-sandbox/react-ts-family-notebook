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
    folderId: FolderEntities['id'];
  },
  {
    entities: {
      folderContents: FolderContentsEntities;
    };
    result: FolderContentEntities['id'][];
  }
>('FETCH', {
  schema: [schemas.folderContent],
});

export const addFolderContent = actionCreator.async<
  {
    folderId: FolderEntities['id'];
    title: FolderContentEntities['title'];
    content: FolderContentEntities['content'];
  },
  {
    id: FolderContentEntities['id'];
    folderId: FolderEntities['id'];
    title: FolderContentEntities['title'];
    content: FolderContentEntities['content'];
  }
>('ADD');

export const editFolderContent = actionCreator.async<
  {
    id: FolderContentEntities['id'];
    folderId: FolderEntities['id'];
    title: FolderContentEntities['title'];
    content: FolderContentEntities['content'];
  },
  {
    id: FolderContentEntities['id'];
    folderId: FolderEntities['id'];
    title: FolderContentEntities['title'];
    content: FolderContentEntities['content'];
  }
>('EDIT');

export const deleteFolderContent = actionCreator.async<
  {
    id: FolderContentEntities['id'];
    folderId: FolderEntities['id'];
  },
  {
    id: FolderContentEntities['id'];
    folderId: FolderEntities['id'];
  }
>('DELETE');
