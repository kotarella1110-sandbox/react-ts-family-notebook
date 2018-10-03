import { schema } from 'normalizr';

export const folderContent = new schema.Entity('folderContents');

export const folder = new schema.Entity('folders', {
  contents: [folderContent],
});

export const careReceiver = new schema.Entity('careReceivers', {
  folders: [folder],
});
