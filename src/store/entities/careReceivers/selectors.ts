import { State, CareReceiversEntities } from 'models';

export const getCareReceivers = ({
  entities: { careReceivers },
}: State): CareReceiversEntities => careReceivers;
