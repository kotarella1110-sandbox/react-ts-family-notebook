export interface CareReceiver {
  id: number;
  name: string;
  birth: string;
  folders?: number[];
}

export interface Folder {
  id: number;
  careReceiverId: number;
  name: string;
}

export interface State {
  careReceivers: any;
  folders: any;
}
