import * as React from 'react';
import styled, { css } from 'styled';
import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';

export interface Props {
  readonly primary?: boolean;
  readonly reverse?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ArrowButton: React.SFC<Props> = props => (
  <Wrapper {...props}>
    <Icon name="arrow" reverse={props.reverse} />
  </Wrapper>
);

ArrowButton.defaultProps = {
  primary: false,
  reverse: false,
  onClick: e => null,
};

const Wrapper = styled<Props>(Button)`
  display: inline;
  text-align: start;
  line-height: 0;

  ${props =>
    props.primary &&
    css`
      svg path {
        fill: ${props => props.theme.brandPrimary} !important;
      }
    `};
`;

export default ArrowButton;
