import * as React from 'react';
import styled from 'styled';
import { FolderEntities } from 'models';
import CareReceiverInfoItem from 'containers/CareReceiverInfoItem';

export interface Props {
  readonly folderIds: FolderEntities['id'][];
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CareReceiverInfoList: React.SFC<Props> = ({ folderIds, onClick }) => (
  <List>
    {folderIds.map(folderId => (
      <Item key={folderId}>
        <CareReceiverInfoItem folderId={folderId} onClick={onClick} />
      </Item>
    ))}
  </List>
);

CareReceiverInfoList.defaultProps = {
  onClick: e => null,
};

const List = styled<{}, 'ul'>('ul')`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled<{}, 'li'>('li')`
  border-top: solid 1px ${props => props.theme.borderColor};
  border-bottom: solid 1px ${props => props.theme.borderColor};

  & + & {
    border-top: 0;
  }
`;

export default CareReceiverInfoList;
