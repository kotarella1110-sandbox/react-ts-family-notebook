import { State, CareReceiversEntities, CareReceiverEntities } from 'models';
import { OwnProps } from 'containers/CareReceiverInfoPage';

export const getCareReceivers = ({
  entities: { careReceivers },
}: State): CareReceiversEntities => careReceivers;

export const getCareReceiver = (
  { entities: { careReceivers } }: State,
  { careReceiverId }: OwnProps
): CareReceiverEntities => careReceivers[careReceiverId];
