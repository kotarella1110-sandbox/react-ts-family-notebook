import * as React from 'react';
import { ThemeProvider } from 'styled';
import { Route, Switch } from 'react-router';
import globalStyle from './globalStyle';
import theme from './theme';
// import { CareReceiverEntities, FolderEntities } from 'models';
import CareReceiverInfoPage from 'containers/CareReceiverInfoPage';
import CareReceiverInfoDetailPage from 'containers/CareReceiverInfoDetailPage';

// tslint:disable-next-line:no-expression-statement
globalStyle(theme);

const App: React.SFC = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route
        exact={true}
        path="/careReceivers/:careReceiverId/info"
        component={CareReceiverInfoPage}
      />
      <Route
        path="/careReceivers/:careReceiverId/info/:folderId"
        component={CareReceiverInfoDetailPage}
      />
    </Switch>
  </ThemeProvider>
);

export default App;
