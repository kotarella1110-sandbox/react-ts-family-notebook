import * as React from 'react';
import styled from 'styled';

export interface Props {
  readonly icon: JSX.Element;
  readonly children: React.ReactNode;
  readonly right?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Item: React.SFC<Props> = ({ icon, children, right, onClick }) => (
  <Wrapper onClick={onClick}>
    <Icon>{icon}</Icon>
    <Contents>{children}</Contents>
    {right && <Right>{right && right}</Right>}
  </Wrapper>
);

Item.defaultProps = {
  right: null,
  onClick: e => null,
};

const Icon = styled.div`
  svg,
  div {
    width: 36px;
    height: 36px;
  }
`;

const Contents = styled.div``;

const Right = styled.div``;

const Wrapper = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 16px;
  color: ${props => props.theme.textColor};
  min-height: 48px;
  background-color: ${props => props.theme.white};

  & > * {
    margin: 2px;
  }

  & > ${Contents} {
    flex: 1;
  }
`;

export default Item;
