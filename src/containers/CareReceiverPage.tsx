import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Action } from 'typescript-fsa';
import { denormalize } from 'normalizr';
import * as schemas from 'store/schemas';
import { mayBeStubbed } from 'react-stubber';
import CareReceiverPage from 'components/pages/CareReceiverPage';
import { fetchCareReceivers } from 'store/careReceivers/actions';
import { addFolder } from 'store/folders/actions';
import { State } from 'models';

const mapStateToProps = (state: State) => {
  if (!Object.keys(state.careReceivers).length) {
    return { careReceivers: null };
  }
  console.log('normalized', state);
  const denormalized = denormalize(
    { careReceivers: [0, 1] },
    { careReceivers: [schemas.careReceiver] },
    state
  );
  console.log('denormalized', denormalized);
  return denormalized;
};

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
