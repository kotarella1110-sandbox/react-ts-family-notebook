import * as React from 'react';
import styled from 'styled';
import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';

export interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddButton: React.SFC<Props> = ({ onClick, children }) => (
  <Wrapper onClick={onClick}>
    <Icon name="add" />
    <span>{children}</span>
  </Wrapper>
);

AddButton.defaultProps = {
  onClick: e => null,
};

const Wrapper = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${props => props.theme.brandPrimary};
  padding: ${props => props.theme.sizeBase};

  svg {
    width: 18px;
    height: 18px;
    display: block;
    margin: 0 ${props => props.theme.sizeBaseIconKerning} 0 0;
    > circle {
      fill: ${props => props.theme.white} !important;
    }
    > line {
      stroke: ${props => props.theme.brandPrimary} !important;
    }
  }

  span {
    display: block;
    color: ${props => props.theme.white};
    font-weight: bold;
    line-height: 1em;
  }
`;

export default AddButton;
