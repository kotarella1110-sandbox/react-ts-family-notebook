import * as React from 'react';
import { ThemeProvider } from 'styled';
import { Route, Switch } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import globalStyle from './globalStyle';
import theme from './theme';
// import { CareReceiverEntities, FolderEntities } from 'models';
import CareReceiverPage from 'containers/CareReceiverPage';
import CareReceiverInfoDetailPage from 'containers/CareReceiverInfoDetailPage';

globalStyle(theme);

const App: React.SFC = () => {
  const renderCareReceiverInfoPage = ({
    match: { params },
    ...props
  }: RouteComponentProps<{
    careReceiverId: string;
  }>) => <CareReceiverPage {...props} careReceiverId={params.careReceiverId} />;

  const renderCareReceiverInfoDetailPage = ({
    match: { params },
    ...props
  }: RouteComponentProps<{
    careReceiverId: string;
    folderId: string;
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
