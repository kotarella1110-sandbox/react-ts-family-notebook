import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Action } from 'typescript-fsa';
import { mayBeStubbed } from 'react-stubber';
import { State, CareReceiverEntities, FolderEntities } from 'models';
import { getCareReceiver, getFolder } from 'store/selectors';
import * as actions from 'store/actions';
import CareReceiverInfoDetailPage from 'components/pages/CareReceiverInfoDetailPage';

export interface OwnProps {
  readonly careReceiverId: CareReceiverEntities['id'];
  readonly folderId: FolderEntities['id'];
}

const mapStateToProps = (state: State, ownProps: OwnProps) => ({
  careReceiver: getCareReceiver(state, ownProps),
  folder: getFolder(state, ownProps),
});

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) =>
  bindActionCreators<any, any>(
    {
      editFolder: actions.editFolder.started,
      deleteFolder: actions.deleteFolder.started,
      addFolderContent: actions.addFolderContent.started,
      editFolderContent: actions.editFolderContent.started,
      deleteFolderContent: actions.deleteFolderContent.started,
    },
    dispatch
  );

const CareReceiverInfoDetailPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CareReceiverInfoDetailPage);

export default mayBeStubbed(CareReceiverInfoDetailPageContainer);
