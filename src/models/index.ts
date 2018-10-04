interface NormalizedObjects<T> {
  [id: number]: T;
}

interface CareReceiver {
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

interface Folder {
  id: number;
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
  id: number;
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
  entities: Entities;
}
