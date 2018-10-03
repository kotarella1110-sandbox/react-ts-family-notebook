import * as React from 'react';
import styled from 'styled';
import { Folder } from 'models';
import Icon from '../../atoms/Icon';
import ArrowButton from '../../atoms/ArrowButton';
import Item from '../Item';

export interface Props {
  readonly folder: Folder;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CareReceiverInfoItem: React.SFC<Props> = ({
  folder: { name },
  onClick,
}) => (
  <Item
    icon={<Icon icon="carereceiver-info" />}
    right={<ArrowButton isRight={true} />}
    onClick={onClick}>
    <Title>{name}</Title>
  </Item>
);

const Title = styled<{}, 'h4'>('h4')`
  margin: 0;
  line-height: 1.5em;
`;

CareReceiverInfoItem.defaultProps = {
  onClick: e => null,
};

export default CareReceiverInfoItem;
