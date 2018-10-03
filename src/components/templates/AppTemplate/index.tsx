import * as React from 'react';
import styled from 'styled';

export interface Props {
  readonly header: React.ReactNode;
}

const AppTemplate: React.SFC<Props> = ({ header, children }) => (
  <Wrapper>
    <Header>{header}</Header>
    <Main>{children}</Main>
  </Wrapper>
);

const Wrapper = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

export default AppTemplate;
