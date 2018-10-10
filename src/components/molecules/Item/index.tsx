import * as React from 'react';
import styled from 'styled';

export interface Props {
  readonly icon: JSX.Element;
  readonly children: React.ReactNode;
  readonly right?: React.ReactNode;
}

const Item: React.SFC<Props> = ({ icon, children, right }) => (
  <Wrapper>
    {icon}
    <Contents>{children}</Contents>
    {right && <Right>{right && right}</Right>}
  </Wrapper>
);

Item.defaultProps = {
  right: null,
};

const Contents = styled.div`
  padding: 0 8px;
`;

const Right = styled.div``;

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  padding: 12px 16px;
  color: ${props => props.theme.textColor};
  min-height: 48px;
  background-color: ${props => props.theme.white};

  & > * {
    display: flex;
    align-items: center;
  }

  & > ${Contents} {
    flex: 1;
  }
`;

export default Item;
