import * as React from 'react';
import { CareReceiverEntities } from 'models';
import styled from 'styled';
import CareReceiverItem from '../../molecules/CareReceiverItem';
import CareReceiverInfoList from '../CareReceiverInfoList';

export interface Props {
  readonly careReceiver: CareReceiverEntities;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CareReceiverInfoMain: React.SFC<Props> = ({ careReceiver, onClick }) => (
  <Wrapper>
    <CareReceiverItem careReceiver={careReceiver} />
    {careReceiver.folders && (
      <CareReceiverInfoList
        folderIds={careReceiver.folders}
        onClick={onClick}
      />
    )}
  </Wrapper>
);

CareReceiverInfoMain.defaultProps = {
  onClick: e => null,
};

const Wrapper = styled.div``;

export default CareReceiverInfoMain;
