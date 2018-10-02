import { State, Folders, Folder } from 'models';
import { OwnProps } from 'containers/CareReceiverInfoItem';

export const getFolders = ({ entities: { folders } }: State): Folders =>
  folders;

export const getFolder = (
  { entities: { folders } }: State,
  { folderId }: OwnProps
): Folder => folders[folderId];
