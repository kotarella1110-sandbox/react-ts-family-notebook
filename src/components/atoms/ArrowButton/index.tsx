import * as React from 'react';
import styled, { css } from 'styled';
import Icon from 'components/atoms/Icon';

export interface Props {
  isPrimary?: boolean;
  isRight?: boolean;
}

const ArrowButton: React.SFC<Props> = props => {
  return (
    <Wrapper {...props}>
      <Icon icon="arrow" />
    </Wrapper>
  );
};

ArrowButton.defaultProps = {
  isPrimary: false,
  isRight: false,
};

const Wrapper = styled<{ isPrimary?: boolean; isRight?: boolean }, 'a'>('a')`
  display: block;
  line-height: 0;

  svg {
    width: ${props => props.theme.sizeBase} * 3;
    height: ${props => props.theme.sizeBase} * 3;
  }

  ${props =>
    props.isRight &&
    css`
      transform: rotateY(180deg);
    `};

  ${props =>
    props.isPrimary &&
    css`
      svg path {
        fill: ${props => props.theme.brandPrimary} !important;
      }
    `};
`;

export default ArrowButton;
