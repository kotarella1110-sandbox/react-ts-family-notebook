import styled from 'styled-components';
import Button from 'components/atoms/Button';

const SquareButton = styled(Button)`
  display: block;
  text-align: center;
  font-size: ${props => props.theme.fontSizeLarge};
  color: ${props => props.theme.white};
  height: calc(${props => props.theme.sizeBase} * 6);
  padding: ${props => props.theme.sizeBase}
    calc(${props => props.theme.sizeBase} * 2);
  background-color: ${props => props.theme.brandPrimary};
  border-radius: ${props => props.theme.borderRadius};
`;

export default SquareButton;
