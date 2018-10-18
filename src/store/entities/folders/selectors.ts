import { ensureState } from 'redux-optimistic-ui';
import { State /*, FoldersEntities*/, FolderEntities } from 'models';
import { OwnProps } from 'containers/CareReceiverInfoItem';

export const getFolders = ({ entities }: State) /*: FoldersEntities['byId']*/ =>
  ensureState(entities).folders.byId;

export const getFolder = (
  { entities }: State,
  { folderId }: OwnProps
): FolderEntities => {
  console.log(ensureState(entities).folders);
  return ensureState(entities).folders.byId[folderId];
};
