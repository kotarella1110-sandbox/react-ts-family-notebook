import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Action } from 'typescript-fsa';
import { mayBeStubbed } from 'react-stubber';
import { State, CareReceiverEntities } from 'models';
import { getCareReceiver } from 'store/selectors';
import { fetchCareReceivers, addFolder } from 'store/actions';
import CareReceiverPage from 'components/pages/CareReceiverPage';

export interface OwnProps {
  careReceiverId: CareReceiverEntities['id'];
}

const mapStateToProps = (state: State, ownProps: OwnProps) => ({
  careReceiver: getCareReceiver(state, ownProps),
});

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) =>
  bindActionCreators<any, any>(
    {
      fetchCareReceivers: fetchCareReceivers.started,
      addFolder: addFolder.started,
    },
    dispatch
  );

const CareReceiverPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CareReceiverPage);

export default mayBeStubbed(CareReceiverPageContainer);
