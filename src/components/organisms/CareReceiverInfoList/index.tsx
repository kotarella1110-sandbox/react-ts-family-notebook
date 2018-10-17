import * as React from 'react';
import styled from 'styled';
import { CareReceiverEntities, FolderEntities } from 'models';
import Link from 'components/atoms/Link';
import CareReceiverInfoItem from 'containers/CareReceiverInfoItem';

export interface Props {
  readonly careReceiverId: CareReceiverEntities['id'];
  readonly folderIds: ReadonlyArray<FolderEntities['id']>;
}

const CareReceiverInfoList: React.SFC<Props> = ({
  careReceiverId,
  folderIds,
}) => (
  <List>
    {folderIds.map(folderId => (
      <Item key={folderId}>
        <Link to={`/careReceivers/${careReceiverId}/info/${folderId}`}>
          <CareReceiverInfoItem folderId={folderId} />
        </Link>
      </Item>
    ))}
  </List>
);

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
