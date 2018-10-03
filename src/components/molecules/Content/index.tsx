import * as React from 'react';
import styled from 'styled';

export interface Props {
  readonly label: string;
  readonly text?: string;
  readonly children: React.ReactNode;
}

const Content: React.SFC<Props> = ({ label, text, children }) => (
  <Wrapper>
    <Label>{label}</Label>
    <Contents>{children}</Contents>
    {text && <Text>{text}</Text>}
  </Wrapper>
);

Content.defaultProps = {
  text: undefined,
};

const Label = styled.label``;

const Contents = styled.div``;

const Text = styled.p``;

const Wrapper = styled.div``;

export default Content;
