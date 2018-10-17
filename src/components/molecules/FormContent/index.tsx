import * as React from 'react';
import styled from 'styled';

export interface Props {
  readonly label: string;
  readonly children: React.ReactNode;
}

const FormContent: React.SFC<Props> = ({ label, children }) => (
  <Wrapper>
    <Label>{label}</Label>
    <Content>{children}</Content>
  </Wrapper>
);

const Label = styled.label`
  display: block;
  font-weight: bold;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 16px;
`;

const Wrapper = styled.div`
  padding: 16px 0;
`;

export default FormContent;
