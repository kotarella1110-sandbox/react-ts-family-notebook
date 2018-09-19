export interface CareReceiver {
  id: number;
  name: string;
  birth: string;
  folders: Folder[];
}

export interface Folder {
  id: number;
  name: string;
}
