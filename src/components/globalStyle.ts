import { injectGlobal } from 'styled';
import styledNormalize from 'styled-normalize';
import ThemeInterface from './theme/interface';

const globalStyle = (theme: ThemeInterface) => injectGlobal`
  ${styledNormalize}
  html {
    font-family: ${theme.fontFamily};
  }
`;

export default globalStyle;
