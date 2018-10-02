import { State, Folders, Folder } from 'models';
import { OwnProps } from 'containers/CareReceiverInfoItem';

export const getFolders = ({ folders }: State): Folders => folders;

export const getFolder = ({ folders }: State, { folderId }: OwnProps): Folder =>
  folders[folderId];
