import * as React from 'react';
import styled, { css } from 'styled';
import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';

export interface Props {
  isPrimary?: boolean;
  isRight?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
  onClick: e => null,
};

const Wrapper = styled<Props>(Button)`
  display: block;
  line-height: 0;

  svg {
    width: 24px;
    height: 24px;
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
