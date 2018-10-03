import * as React from 'react';
import { CareReceivers } from 'models';
import styled from 'styled';
import CareReceiverItem from '../../molecules/CareReceiverItem';
import CareReceiverInfoList from '../CareReceiverInfoList';

export interface Props {
  readonly careReceivers: CareReceivers;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CareReceiverList: React.SFC<Props> = ({ careReceivers, onClick }) => (
  <List>
    {Object.values(careReceivers).map(careReceiver => (
      <Item key={careReceiver.id}>
        <CareReceiverItem careReceiver={careReceiver} />
        {careReceiver.folders && (
          <CareReceiverInfoList
            folderIds={careReceiver.folders}
            onClick={onClick}
          />
        )}
      </Item>
    ))}
  </List>
);

CareReceiverList.defaultProps = {
  onClick: e => null,
};

const List = styled<{}, 'ul'>('ul')`
  list-style: none;
  padding: 0;
`;

const Item = styled<{}, 'li'>('li')``;

export default CareReceiverList;
