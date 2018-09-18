import * as React from 'react';
import Icon from '../../atoms/Icon';
import ArrowButton from '../../atoms/ArrowButton';
import Item from '../Item';

export interface Props {
  folder: { name: string };
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CareReceiverInfoItem: React.SFC<Props> = ({
  folder: { name },
  onClick,
}) => {
  return (
    <Item
      icon={<Icon icon="carereceiver-info" />}
      title={name}
      right={<ArrowButton isRight={true} />}
      onClick={onClick}
    />
  );
};

CareReceiverInfoItem.defaultProps = {
  onClick: e => null,
};

export default CareReceiverInfoItem;
