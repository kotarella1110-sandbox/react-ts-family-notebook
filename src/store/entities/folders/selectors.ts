import { ensureState } from 'redux-optimistic-ui';
import { State, CareReceiverEntities, FolderEntities } from 'models';

export const getFolders = (
  { entities }: State,
  { careReceiverId }: { readonly careReceiverId: CareReceiverEntities['id'] }
): ReadonlyArray<FolderEntities> => {
  const allIds = ensureState(entities).careReceivers.byId[careReceiverId]
    .folders;
  const byId = ensureState(entities).folders.byId;
  return !!allIds ? allIds.map(id => byId[id]) : [];
};

export const getFolder = (
  { entities }: State,
  { folderId }: { readonly folderId: FolderEntities['id'] }
): FolderEntities => ensureState(entities).folders.byId[folderId];
