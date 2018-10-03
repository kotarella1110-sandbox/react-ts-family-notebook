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
    {right && <Right>{right}</Right>}
  </Wrapper>
);

Item.defaultProps = {
  right: null,
  onClick: e => null,
};

const Wrapper = styled<{}, 'a'>('a')`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: ${props => props.theme.textColor};
  min-height: 48px;
  background-color: ${props => props.theme.white};
`;

const Icon = styled<{}, 'div'>('div')`
  margin: 0 8px 0 0;
  svg,
  div {
    width: 36px;
    height: 36px;
  }
`;

const Contents = styled<{}, 'div'>('div')``;

const Right = styled<{}, 'div'>('div')`
  margin: 0 0 0 auto;
`;

export default Item;
