import * as React from 'react';
import styled from 'styled';

export interface Props {
  icon: string;
}

const Icon: React.SFC<Props> = ({ icon }) => {
  const svg = require(`!raw-loader!./icons/${icon}.svg`);
  return <Wrapper dangerouslySetInnerHTML={{ __html: svg }} />;
};

const Wrapper = styled.span`
  display: inline-block;
  margin: 0.1em;
  box-sizing: border-box;

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

export default Icon;
