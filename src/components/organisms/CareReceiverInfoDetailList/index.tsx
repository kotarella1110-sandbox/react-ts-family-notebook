import * as React from 'react';
import styled from 'styled';
import { FolderContentEntities } from 'models';
import CareReceiverInfoDetailItem from 'components/molecules/CareReceiverInfoDetailItem';

export interface Props {
  readonly folderContents: ReadonlyArray<FolderContentEntities>;
  readonly toggleFolderContentModal: (
    fonderContents: FolderContentEntities
  ) => void;
}

const CareReceiverInfoDetailList: React.SFC<Props> = ({
  folderContents,
  toggleFolderContentModal,
}) => (
  <List>
    {folderContents.map(folderContent => (
      <Item key={folderContent.id}>
        <CareReceiverInfoDetailItem
          folderContent={folderContent}
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
