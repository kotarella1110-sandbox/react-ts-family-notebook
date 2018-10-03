interface NormalizedObjects<T> {
  [id: number]: T;
}

export interface CareReceiver {
  id: number;
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

export interface Folder {
  id: number;
  careReceiverId: number;
  name: string;
}

export interface FolderEntities extends Folder {}

export interface FolderResources extends Folder {}

export interface FoldersEntities extends NormalizedObjects<FolderEntities> {}

export interface Entities {
  careReceivers: CareReceiversEntities;
  folders: FoldersEntities;
}

export interface State {
  entities: Entities;
}
