import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Action } from 'typescript-fsa';
import { mayBeStubbed } from 'react-stubber';
import CareReceiverPage from 'components/pages/CareReceiverPage';
import { fetchCareReceivers } from 'store/careReceivers/actions';
import { addFolder } from 'store/folders/actions';
import { State } from 'models';

const mapStateToProps = ({ careReceivers }: State) => ({
  careReceivers,
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
