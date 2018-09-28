import * as React from 'react';
import { ThemeProvider } from 'styled';
import globalStyle from './globalStyle';
import theme from './theme';

globalStyle(theme);

const App: React.SFC<{}> = () => <ThemeProvider theme={theme} />;

export default App;
