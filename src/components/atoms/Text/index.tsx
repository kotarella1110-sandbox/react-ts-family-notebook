import styled from 'styled-components';

const Text = styled.input.attrs({
  type: 'text',
})`
  display: block;
  border: solid 1px ${props => props.theme.grayMoreLight};
  border-radius: 4px;
  font-size: ${props => props.theme.fontSizeHuge};
  color: ${props => props.theme.subTextColor};
  line-height: 1em;

  border-top: 0;
  border-radius: 0 0 4px 4px;
`;

export default Text;
