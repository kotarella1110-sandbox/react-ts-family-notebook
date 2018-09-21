import * as React from 'react';
import { CareReceiver } from 'models';
import styled from 'styled';
import CareReceiverItem from '../../molecules/CareReceiverItem';
import CareReceiverInfoList from '../CareReceiverInfoList';

export interface Props {
  careReceivers: CareReceiver[];
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CareReceiverList: React.SFC<Props> = ({ careReceivers, onClick }) => {
  return (
    <List>
      {careReceivers.map(careReceiver => (
        <Item key={careReceiver.id}>
          <CareReceiverItem careReceiver={careReceiver} />
          <CareReceiverInfoList
            folders={careReceiver.folders}
            onClick={onClick}
          />
        </Item>
      ))}
    </List>
  );
};

CareReceiverList.defaultProps = {
  onClick: e => null,
};

const List = styled<{}, 'ul'>('ul')`
  list-style: none;
  padding: 0;
`;

const Item = styled<{}, 'li'>('li')``;

export default CareReceiverList;
