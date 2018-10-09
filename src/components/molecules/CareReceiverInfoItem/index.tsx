import * as React from 'react';
import styled from 'styled';
import { FolderEntities } from 'models';
import Icon from '../../atoms/Icon';
import Item from '../Item';

export interface Props {
  readonly folder: FolderEntities;
}

const CareReceiverInfoItem: React.SFC<Props> = ({ folder: { name } }) => (
  <Item
    icon={<Icon name="care-receiver-info" size="36px" />}
    right={<Icon name="arrow" reverse={true} />}>
    <Title>{name}</Title>
  </Item>
);

const Title = styled.h4`
  margin: 0;
  line-height: 1.5em;
`;

export default CareReceiverInfoItem;
