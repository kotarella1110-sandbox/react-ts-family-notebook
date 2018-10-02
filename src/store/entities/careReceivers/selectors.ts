import { State, CareReceivers } from 'models';

export const getCareReceivers = ({
  entities: { careReceivers },
}: State): CareReceivers => careReceivers;
