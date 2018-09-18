import * as React from 'react';
import Icon from '../../atoms/Icon';
import ArrowButton from '../../atoms/ArrowButton';
import Item from '../Item';

export interface Props {
  title: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CareReceiverInfoItem: React.SFC<Props> = ({ title, onClick }) => {
  return (
    <Item
      icon={<Icon icon="carereceiver-info" />}
      title={title}
      right={<ArrowButton isRight={true} />}
      onClick={onClick}
    />
  );
};

CareReceiverInfoItem.defaultProps = {
  onClick: e => null,
};

export default CareReceiverInfoItem;
