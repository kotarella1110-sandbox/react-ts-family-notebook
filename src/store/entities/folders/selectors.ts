import { State, FoldersEntities, FolderEntities } from 'models';
import { OwnProps } from 'containers/CareReceiverInfoItem';

export const getFolders = ({ entities: { folders } }: State): FoldersEntities =>
  folders;

export const getFolder = (
  { entities: { folders } }: State,
  { folderId }: OwnProps
): FolderEntities => folders[folderId];
