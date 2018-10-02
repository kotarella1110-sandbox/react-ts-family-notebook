interface NormalizedObjects<T> {
  [id: number]: T;
}

export interface CareReceiver {
  id: number;
  name: string;
  birth: string;
  folders?: number[];
}

export interface CareReceivers extends NormalizedObjects<CareReceiver> {}

export interface Folder {
  id: number;
  careReceiverId: number;
  name: string;
}

export interface Folders extends NormalizedObjects<Folder> {}

export interface State {
  careReceivers: CareReceivers;
  folders: Folders;
}
