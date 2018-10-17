import * as React from 'react';
import { ThemeProvider } from 'styled';
import { Route, Switch } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import globalStyle from './globalStyle';
import theme from './theme';
// import { CareReceiverEntities, FolderEntities } from 'models';
import CareReceiverInfoPage from 'containers/CareReceiverInfoPage';
import CareReceiverInfoDetailPage from 'containers/CareReceiverInfoDetailPage';

// tslint:disable-next-line:no-expression-statement
globalStyle(theme);

const App: React.SFC = () => {
  const renderCareReceiverInfoPage = ({
    match: { params },
    ...props
  }: RouteComponentProps<{
    readonly careReceiverId: string;
  }>) => (
    <CareReceiverInfoPage {...props} careReceiverId={params.careReceiverId} />
  );

  const renderCareReceiverInfoDetailPage = ({
    match: { params },
    ...props
  }: RouteComponentProps<{
    readonly careReceiverId: string;
    readonly folderId: string;
  }>) => (
    <CareReceiverInfoDetailPage
      {...props}
      careReceiverId={params.careReceiverId}
      folderId={params.folderId}
    />
  );

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route
          exact={true}
          path="/careReceivers/:careReceiverId/info"
          render={renderCareReceiverInfoPage}
        />
        <Route
          path="/careReceivers/:careReceiverId/info/:folderId"
          render={renderCareReceiverInfoDetailPage}
        />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
