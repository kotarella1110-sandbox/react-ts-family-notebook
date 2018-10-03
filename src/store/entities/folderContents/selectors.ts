import { State, FolderContentsEntities, FolderContentEntities } from 'models';

export const getFolderContents = ({
  entities: { folderContents },
}: State): FolderContentsEntities => folderContents;

export const getFolderContent = (
  { entities: { folderContents } }: State,
  { folderContentId }: { folderContentId: FolderContentEntities['id'] }
): FolderContentEntities => folderContents[folderContentId];
