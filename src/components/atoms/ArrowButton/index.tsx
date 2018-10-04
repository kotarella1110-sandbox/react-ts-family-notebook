import * as React from 'react';
import styled, { css } from 'styled';
import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';

export interface Props {
  readonly isPrimary?: boolean;
  readonly isReverse?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ArrowButton: React.SFC<Props> = props => (
  <Wrapper {...props}>
    <Icon icon="arrow" />
  </Wrapper>
);

ArrowButton.defaultProps = {
  isPrimary: false,
  isReverse: false,
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
    props.isReverse &&
    css`
      transform: scale(-1, 1);
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
