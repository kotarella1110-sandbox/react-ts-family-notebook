import * as React from 'react';
import { CareReceiverEntities, FolderEntities } from 'models';
import styled from 'styled';
import CareReceiverItem from '../../molecules/CareReceiverItem';
import CareReceiverInfoDetailList from '../CareReceiverInfoDetailList';

export interface Props {
  readonly careReceiver: CareReceiverEntities;
  readonly folder: FolderEntities;
  toggleFolderModal?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CareReceiverInfoDetailMain: React.SFC<Props> = ({
  careReceiver,
  folder,
  toggleFolderModal,
}) => (
  <Wrapper>
    <CareReceiverItem careReceiver={careReceiver} />
    <FolderTitle style={{ display: 'flex' }}>
      <h4>{folder.name}</h4>
      <a onClick={toggleFolderModal}>編集</a>
    </FolderTitle>
    {folder.contents && (
      <CareReceiverInfoDetailList folderContentIds={folder.contents} />
    )}
  </Wrapper>
);

CareReceiverInfoDetailMain.defaultProps = {
  toggleFolderModal: e => null,
};

const FolderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px;

  & > h4 {
    flex: 1;
    margin: 0;
  }
`;

const Wrapper = styled.div``;

export default CareReceiverInfoDetailMain;
