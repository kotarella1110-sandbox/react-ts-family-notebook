import * as React from 'react';
import styled, { css } from 'styled';

export interface Props {
  left?: React.ReactNode;
  right: React.ReactNode;
  title: string;
}

const Header: React.SFC<Props> = ({ left, right, title }) => (
  <Wrapper>
    <Left>{left}</Left>
    <Title>{title}</Title>
    <Right>{right}</Right>
  </Wrapper>
);

Header.defaultProps = {
  left: null,
};

const mixin = css`
  width: calc(${props => props.theme.sizeBase} * 10);
  display: block;
  line-height: 1em;
`;

const Left = styled<{ isCancel?: boolean }, 'div'>('div')`
  ${mixin};
`;

const Title = styled.h2`
  font-size: 5vw;
  font-weight: bold;
  color: ${props => props.theme.brandPrimary};
  white-space: nowrap;
  overflow: hidden;
  margin: 0;

  @media (min-width: 380px) {
    font-size: ${props => props.theme.fontSizeHuge};
  }
`;

const Right = styled.div`
  ${mixin};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;

  background-color: ${props => props.theme.headerColor};
  border-bottom: solid 2px #babfbd;

  box-sizing: border-box;
  height: calc(${props => props.theme.sizeBase} * 6);
  padding: 0 calc(${props => props.theme.sizeBase} * 2);

  a {
    color: ${props => props.theme.brandPrimary};
    display: inline-block;
  }

  & > * {
    display: flex;
    align-items: center;
  }

  & > ${Left} {
    justify-content: flex-start;
  }

  & > ${Title} {
    flex: 1;
    justify-content: center;
  }

  & > ${Right} {
    justify-content: flex-end;
  }
`;

export default Header;
