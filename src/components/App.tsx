import * as React from 'react';
import { injectGlobal, ThemeProvider } from 'styled';
import reset from 'styled-reset';
import theme from './theme';

injectGlobal`
  ${reset}
  body {
    font-family: ${theme.fontFamily};
  }
`;

const App: React.SFC<{}> = () => <ThemeProvider theme={theme} />;

export default App;
