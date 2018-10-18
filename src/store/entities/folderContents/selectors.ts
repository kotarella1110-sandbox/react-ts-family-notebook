import { ensureState } from 'redux-optimistic-ui';
import { State, FolderContentsEntities, FolderContentEntities } from 'models';

export const getFolderContents = ({
  entities,
}: State): FolderContentsEntities['byId'] =>
  ensureState(entities).folderContents.byId;

export const getFolderContent = (
  { entities }: State,
  { folderContentId }: { readonly folderContentId: FolderContentEntities['id'] }
): FolderContentEntities =>
  ensureState(entities).folderContents.byId[folderContentId];
