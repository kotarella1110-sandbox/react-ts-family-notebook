import * as React from 'react';
import { CareReceiverEntities } from 'models';
import styled from 'styled';
import CareReceiverItem from '../../molecules/CareReceiverItem';
import CareReceiverInfoList from '../CareReceiverInfoList';

export interface Props {
  readonly careReceiver: CareReceiverEntities;
}

const CareReceiverInfoMain: React.SFC<Props> = ({ careReceiver }) => (
  <Wrapper>
    <CareReceiverItem careReceiver={careReceiver} />
    {careReceiver.folders && (
      <CareReceiverInfoList
        careReceiverId={careReceiver.id}
        folderIds={careReceiver.folders}
      />
    )}
  </Wrapper>
);

const Wrapper = styled.div``;

export default CareReceiverInfoMain;
