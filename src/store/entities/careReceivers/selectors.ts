import { ensureState } from 'redux-optimistic-ui';
import { State, CareReceiverEntities } from 'models';

export const getCareReceivers = ({
  entities,
}: State): ReadonlyArray<CareReceiverEntities> => {
  const allIds = ensureState(entities).careReceivers.allIds;
  const byId = ensureState(entities).careReceivers.byId;
  return allIds.map(id => byId[id]);
};

export const getCareReceiver = (
  { entities }: State,
  { careReceiverId }: { readonly careReceiverId: CareReceiverEntities['id'] }
) => ensureState(entities).careReceivers.byId[careReceiverId];
