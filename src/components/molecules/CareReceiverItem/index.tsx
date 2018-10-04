import * as React from 'react';
import styled from 'styled';
import { CareReceiverEntities } from 'models';
import Icon from '../../atoms/Icon';
import Item from '../Item';

export interface Props {
  readonly careReceiver: CareReceiverEntities;
}

const CareReceiverItem: React.SFC<Props> = ({
  careReceiver: { name, birth },
}) => (
  <Wrapper>
    <Item icon={<Icon name="care-receiver" size="36px" />}>
      <div>
        <Name>{name}</Name>
        <Birth>{birth}</Birth>
      </div>
    </Item>
  </Wrapper>
);

const Name = styled<{}, 'h4'>('h4')`
  margin: 0;
  line-height: 1.5em;
`;

const Birth = styled<{}, 'p'>('p')`
  margin: 0;
  line-height: 1.5em;
`;

const Wrapper = styled.a``;

export default CareReceiverItem;
