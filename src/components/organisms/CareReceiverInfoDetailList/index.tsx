import * as React from 'react';
import styled from 'styled';
import { FolderEntities, FolderContentEntities } from 'models';
import CareReceiverInfoDetailItem from 'containers/CareReceiverInfoDetailItem';

export interface Props {
  readonly folderContentIds: ReadonlyArray<FolderEntities['id']>;
  readonly toggleFolderContentModal: (
    fonderContent: FolderContentEntities
  ) => void;
}

const CareReceiverInfoDetailList: React.SFC<Props> = ({
  folderContentIds,
  toggleFolderContentModal,
}) => (
  <List>
    {folderContentIds.map(folderContentId => (
      <Item key={folderContentId}>
        <CareReceiverInfoDetailItem
          folderContentId={folderContentId}
          toggleFolderContentModal={toggleFolderContentModal}
        />
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

export default CareReceiverInfoDetailList;
