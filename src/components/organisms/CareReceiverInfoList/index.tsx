import * as React from 'react';
import styled from 'styled';
import { CareReceiverEntities, FolderEntities } from 'models';
import Link from 'components/atoms/Link';
import CareReceiverInfoItem from 'components/molecules/CareReceiverInfoItem';

export interface Props {
  readonly careReceiverId: CareReceiverEntities['id'];
  readonly folders: ReadonlyArray<FolderEntities>;
}

const CareReceiverInfoList: React.SFC<Props> = ({
  careReceiverId,
  folders,
}) => (
  <List>
    {folders.map(folder => (
      <Item key={folder.id}>
        <Link to={`/careReceivers/${careReceiverId}/info/${folder.id}`}>
          <CareReceiverInfoItem folder={folder} />
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
