import { OptimisticState } from 'redux-optimistic-ui';
import { RouterState } from 'connected-react-router';

interface NormalizedObjects<T> {
  [id: string]: T;
}

interface CareReceiver {
  id: string;
  name: string;
  birth: string;
}

export interface CareReceiverEntities extends CareReceiver {
  folders?: Folder['id'][];
}

export interface CareReceiverResources extends CareReceiver {
  folders?: Folder[];
}

export interface CareReceiversEntities
  extends NormalizedObjects<CareReceiverEntities> {}

interface Folder {
  id: string;
  careReceiverId: CareReceiver['id'];
  name: string;
}

export interface FolderEntities extends Folder {
  contents?: FolderContentEntities['id'][];
}

export interface FolderResources extends Folder {
  contents?: FolderContent[];
}

export interface FoldersEntities extends NormalizedObjects<FolderEntities> {}

interface FolderContent {
  id: string;
  folderId: Folder['id'];
  title: string;
  content: string;
}

export interface FolderContentEntities extends FolderContent {}

export interface FolderContentResources extends FolderContent {}

export interface FolderContentsEntities
  extends NormalizedObjects<FolderContentEntities> {}

export interface Entities {
  careReceivers: CareReceiversEntities;
  folders: FoldersEntities;
  folderContents: FolderContentsEntities;
}

export interface State {
  entities: OptimisticState<Entities>;
  router?: RouterState;
}
