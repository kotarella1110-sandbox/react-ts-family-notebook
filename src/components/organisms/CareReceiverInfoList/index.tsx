import * as React from 'react';
import { Folder } from 'models';
import styled from 'styled';
import CareReceiverInfoItem from '../../molecules/CareReceiverInfoItem';

export interface Props {
  folders: Folder[];
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CareReceiverInfoList: React.SFC<Props> = ({ folders, onClick }) => {
  return (
    <List>
      {folders.map(folder => (
        <Item key={folder.id}>
          <CareReceiverInfoItem folder={folder} onClick={onClick} />
        </Item>
      ))}
    </List>
  );
};

CareReceiverInfoList.defaultProps = {
  onClick: e => null,
};

const List = styled<{}, 'ul'>('ul')``;

const Item = styled<{}, 'li'>('li')``;

export default CareReceiverInfoList;
