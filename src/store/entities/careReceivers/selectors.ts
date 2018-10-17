import { ensureState } from 'redux-optimistic-ui';
import { State, CareReceiversEntities } from 'models';
import { OwnProps } from 'containers/CareReceiverInfoPage';

export const getCareReceivers = ({ entities }: State): CareReceiversEntities =>
  ensureState(entities).careReceivers;

export const getCareReceiver = (
  { entities }: State,
  { careReceiverId }: OwnProps
) => ensureState(entities).careReceivers[careReceiverId];
