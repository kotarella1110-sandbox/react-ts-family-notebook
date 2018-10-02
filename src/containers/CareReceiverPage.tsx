import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Action } from 'typescript-fsa';
import { mayBeStubbed } from 'react-stubber';
import { State } from 'models';
import { getCareReceivers } from 'store/selectors';
import { fetchCareReceivers } from 'store/careReceivers/actions';
import { addFolder } from 'store/actions';
import CareReceiverPage from 'components/pages/CareReceiverPage';

const mapStateToProps = (state: State) => ({
  careReceivers: getCareReceivers(state),
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
