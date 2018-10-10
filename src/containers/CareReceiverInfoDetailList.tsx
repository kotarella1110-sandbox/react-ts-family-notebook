import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Action } from 'typescript-fsa';
import { mayBeStubbed } from 'react-stubber';
import { State, CareReceiverEntities, FolderEntities } from 'models';
import { getCareReceiver, getFolder } from 'store/selectors';
import * as actions from 'store/actions';
import CareReceiverInfoDetailPage from 'components/pages/CareReceiverInfoDetailPage';

export interface OwnProps {
  careReceiverId: CareReceiverEntities['id'];
  folderId: FolderEntities['id'];
}

const mapStateToProps = (state: State, ownProps: OwnProps) => ({
  careReceiver: getCareReceiver(state, ownProps),
  folder: getFolder(state, ownProps),
});

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) =>
  bindActionCreators<any, any>(
    {
      fetchCareReceivers: actions.fetchCareReceivers.started,
      editFolder: actions.editFolder,
      deleteFolder: actions.deleteFolder,
      addFolderContent: actions.addFolderContent.started,
    },
    dispatch
  );

const CareReceiverInfoDetailPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CareReceiverInfoDetailPage);

export default mayBeStubbed(CareReceiverInfoDetailPageContainer);
