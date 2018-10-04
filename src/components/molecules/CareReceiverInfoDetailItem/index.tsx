import * as React from 'react';
import styled from 'styled';
import { FolderContentEntities } from 'models';
import Icon from '../../atoms/Icon';
import Item from '../Item';

export interface Props {
  readonly folderContent: FolderContentEntities;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CareReceiverInfoDetailItem: React.SFC<Props> = ({
  folderContent: { title, content },
  onClick,
}) => (
  <Wrapper onClick={onClick}>
    <Item
      icon={<Icon name="care-receiver-info-detail" size="34px" />}
      right={<p>編集</p>}>
      <Title>{title}</Title>
    </Item>
    <Contents>
      <StyledIcon name="exclamation" />
      <p>{content}</p>
    </Contents>
  </Wrapper>
);

CareReceiverInfoDetailItem.defaultProps = {
  onClick: e => null,
};

const Title = styled<{}, 'h4'>('h4')`
  margin: 0;
  line-height: 1.5em;
`;

const StyledIcon = styled(Icon)``;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px;
  font-size: ${props => props.theme.fontSizeBase};

  ${StyledIcon} {
    margin: ${props => props.theme.sizeBaseHalf};
  }

  p {
    flex: 1;
    color: ${props => props.theme.subTextColor};
    word-break: break-all;
  }
`;

const Wrapper = styled.a``;

export default CareReceiverInfoDetailItem;
