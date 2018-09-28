import * as React from 'react';
import { ThemeProvider } from 'styled';
import globalStyle from './globalStyle';
import theme from './theme';
import CareReceiverPage from 'containers/CareReceiverPage';

globalStyle(theme);

const App: React.SFC = () => (
  <ThemeProvider theme={theme}>
    <CareReceiverPage />
  </ThemeProvider>
);

export default App;
