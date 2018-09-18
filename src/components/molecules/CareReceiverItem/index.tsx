import * as React from 'react';
import Icon from '../../atoms/Icon';
import Item from '../Item';

export interface Props {
  careReceiver: { id: number; name: string; birth: string };
}

const CareReceiverItem: React.SFC<Props> = ({ careReceiver }) => {
  return (
    <Item
      icon={<Icon icon="carereceiver" />}
      title={careReceiver.name}
      text={careReceiver.birth}
    />
  );
};

export default CareReceiverItem;
