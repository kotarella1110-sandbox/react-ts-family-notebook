import { ensureState } from 'redux-optimistic-ui';
import { State, FoldersEntities, FolderEntities } from 'models';
import { OwnProps } from 'containers/CareReceiverInfoItem';

export const getFolders = ({ entities }: State): FoldersEntities =>
  ensureState(entities).folders;

export const getFolder = (
  { entities }: State,
  { folderId }: OwnProps
): FolderEntities => ensureState(entities).folders[folderId];
