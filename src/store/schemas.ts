import { schema } from 'normalizr';

export const folder = new schema.Entity('folders');

export const careReceiver = new schema.Entity('careReceivers', {
  folders: [folder],
});
