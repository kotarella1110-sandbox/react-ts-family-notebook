import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Action } from 'typescript-fsa';
import { mayBeStubbed } from 'react-stubber';
import { State, CareReceiverEntities } from 'models';
import { getCareReceiver } from 'store/selectors';
import * as actions from 'store/actions';
import CareReceiverInfoPage, {
  Props as CareReceiverInfoPageProps,
} from 'components/pages/CareReceiverInfoPage';

export interface Props extends CareReceiverInfoPageProps {
  readonly fetchCareReceivers: (
    payload: ReturnType<typeof actions.fetchCareReceivers.started>['payload']
  ) => any;
}

class CareReceiverInfoPageContainer extends React.Component<Props> {
  componentDidMount(): void {
    const { fetchCareReceivers } = this.props;
    fetchCareReceivers({});
  }

  render(): JSX.Element {
    const { fetchCareReceivers, ...props } = this.props;
    return <CareReceiverInfoPage {...props} />;
  }
}

export interface OwnProps {
  readonly careReceiverId: CareReceiverEntities['id'];
}

const mapStateToProps = (
  state: State,
  { match: { params } }: RouteComponentProps<OwnProps>
) => {
  const props = {
    careReceiverId: params.careReceiverId,
  };
  return {
    careReceiver: getCareReceiver(state, props),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) =>
  bindActionCreators<any, any>(
    {
      fetchCareReceivers: actions.fetchCareReceivers.started,
      fetchFolders: actions.fetchFolders.started,
      addFolder: actions.addFolder.started,
    },
    dispatch
  );

export default mayBeStubbed(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CareReceiverInfoPageContainer)
);
