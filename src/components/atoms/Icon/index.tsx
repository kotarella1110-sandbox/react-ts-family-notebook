import * as React from 'react';
import styled, { css } from 'styled';

export interface Props {
  readonly name: string;
  readonly size?: string;
  readonly reverse?: boolean;
}

const Icon: React.SFC<Props> = props => {
  const svg = require(`!raw-loader!./icons/${props.name}.svg`);
  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg }} />;
};

// tslint:disable-next-line:no-object-mutation
Icon.defaultProps = {
  size: '24px',
  reverse: false,
};

const Wrapper = styled<Props, 'span'>('span')`
  display: inline-block;
  box-sizing: border-box;

  ${props =>
    props.reverse &&
    css`
      transform: scale(-1, 1);
    `};

  & > svg {
    width: ${props => props.size};
    height: ${props => props.size};
  }
`;

export default Icon;
