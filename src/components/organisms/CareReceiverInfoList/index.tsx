import * as React from 'react';
import styled from 'styled';
import CareReceiverInfoItem from '../../molecules/CareReceiverInfoItem';

export interface Props {
  folders: { id: number; title: string }[];
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CareReceiverInfoList: React.SFC<Props> = ({ folders, onClick }) => {
  return (
    <Wrapper>
      {folders.map(folder => (
        <CareReceiverInfoItem
          key={folder.id}
          title={folder.title}
          onClick={onClick}
        />
      ))}
    </Wrapper>
  );
};

CareReceiverInfoList.defaultProps = {
  onClick: e => null,
};

const Wrapper = styled<{}, 'ul'>('ul')``;

export default CareReceiverInfoList;
