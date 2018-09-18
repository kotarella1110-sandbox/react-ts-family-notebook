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
    <Right>{right}</Right>
    <Title>{title}</Title>
  </Wrapper>
);

Header.defaultProps = {
  left: null,
};

const Title = styled.h2`
  font-size: 5vw;
  font-weight: bold;
  color: ${props => props.theme.brandPrimary};
  overflow: hidden;
  white-space: nowrap;
  padding: 0 calc(${props => props.theme.sizeBase} * 2);
  order: 2;

  @media (min-width: 380px) {
    font-size: ${props => props.theme.fontSizeHuge};
  }
`;

const mixin = css`
  width: calc(${props => props.theme.sizeBase} * 10);
  display: block;
  line-height: 1em;
  order: 1;
`;

const Left = styled<{ isCancel?: boolean }, 'div'>('div')`
  ${mixin};
`;

const Right = styled.div`
  ${mixin};
  text-align: right;
  order: 3;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 0 calc(${props => props.theme.sizeBase} * 2);
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  background-color: ${props => props.theme.headerColor};
  height: calc(${props => props.theme.sizeBase} * 6);
  width: 100%;
  border-bottom: solid 2px #babfbd;

  a {
    color: ${props => props.theme.brandPrimary};
    display: inline-block;
  }
`;

export default Header;
