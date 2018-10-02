import * as React from 'react';
import styled from 'styled';
import CareReceiverInfoItem from 'containers/CareReceiverInfoItem';

export interface Props {
  folderIds: number[];
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CareReceiverInfoList: React.SFC<Props> = ({ folderIds, onClick }) => {
  return (
    <List>
      {folderIds.map(folderId => (
        <Item key={folderId}>
          <CareReceiverInfoItem folderId={folderId} onClick={onClick} />
        </Item>
      ))}
    </List>
  );
};

CareReceiverInfoList.defaultProps = {
  onClick: e => null,
};

const List = styled<{}, 'ul'>('ul')`
  list-style: none;
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
