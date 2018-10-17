import * as React from 'react';
import {
  CareReceiverEntities,
  FolderEntities,
  FolderContentEntities,
} from 'models';
import styled from 'styled';
import CareReceiverItem from '../../molecules/CareReceiverItem';
import CareReceiverInfoDetailList from '../CareReceiverInfoDetailList';

export interface Props {
  readonly careReceiver: CareReceiverEntities;
  readonly folder: FolderEntities;
  readonly toggleFolderModal: () => void;
  readonly toggleFolderContentModal: (
    fonderContent: FolderContentEntities
  ) => void;
}

const CareReceiverInfoDetailMain: React.SFC<Props> = ({
  careReceiver,
  folder,
  toggleFolderModal,
  toggleFolderContentModal,
}) => (
  <Wrapper>
    <CareReceiverItem careReceiver={careReceiver} />
    <FolderTitle style={{ display: 'flex' }}>
      <h4>{folder.name}</h4>
      <a
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => {
          toggleFolderModal();
        }}>
        編集
      </a>
    </FolderTitle>
    {folder.contents && (
      <CareReceiverInfoDetailList
        folderContentIds={folder.contents}
        toggleFolderContentModal={toggleFolderContentModal}
      />
    )}
  </Wrapper>
);

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
