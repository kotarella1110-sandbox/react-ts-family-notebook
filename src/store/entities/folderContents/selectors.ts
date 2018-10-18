import { ensureState } from 'redux-optimistic-ui';
import { State, FolderEntities, FolderContentEntities } from 'models';

export const getFolderContents = (
  { entities }: State,
  { folderId }: { readonly folderId: FolderEntities['id'] }
): ReadonlyArray<FolderContentEntities> => {
  const allIds = ensureState(entities).folders.byId[folderId].contents;
  const byId = ensureState(entities).folderContents.byId;
  return !!allIds ? allIds.map(id => byId[id]) : [];
};

export const getFolderContent = (
  { entities }: State,
  { folderContentId }: { readonly folderContentId: FolderContentEntities['id'] }
): FolderContentEntities =>
  ensureState(entities).folderContents.byId[folderContentId];
