import { OptimisticState } from 'redux-optimistic-ui';
import { RouterState } from 'connected-react-router';

interface NormalizedObjects<T> {
  readonly [id: string]: T;
}

interface CareReceiver {
  readonly id: string;
  readonly name: string;
  readonly birth: string;
}

export interface CareReceiverEntities extends CareReceiver {
  readonly folders?: ReadonlyArray<Folder['id']>;
}

export interface CareReceiverResources extends CareReceiver {
  readonly folders?: ReadonlyArray<Folder>;
}

export interface CareReceiversEntities
  extends NormalizedObjects<CareReceiverEntities> {}

interface Folder {
  readonly id: string;
  readonly careReceiverId: CareReceiver['id'];
  readonly name: string;
}

export interface FolderEntities extends Folder {
  readonly contents?: ReadonlyArray<FolderContentEntities['id']>;
}

export interface FolderResources extends Folder {
  readonly contents?: ReadonlyArray<FolderContent>;
}

export interface FoldersEntities extends NormalizedObjects<FolderEntities> {}

interface FolderContent {
  readonly id: string;
  readonly folderId: Folder['id'];
  readonly title: string;
  readonly content: string;
}

export interface FolderContentEntities extends FolderContent {}

export interface FolderContentResources extends FolderContent {}

export interface FolderContentsEntities
  extends NormalizedObjects<FolderContentEntities> {}

export interface Entities {
  readonly careReceivers: CareReceiversEntities;
  readonly folders: FoldersEntities;
  readonly folderContents: FolderContentsEntities;
}

export interface State {
  readonly entities: OptimisticState<Entities>;
  readonly router?: RouterState;
}
