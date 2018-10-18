import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Action } from 'typescript-fsa';
import { mayBeStubbed } from 'react-stubber';
import { State, CareReceiverEntities } from 'models';
import { getFolderContents } from 'store/selectors';
import * as actions from 'store/actions';
import CareReceiverInfoDetailList, {
  Props as CareReceiverInfoDetailListProps,
} from 'components/organisms/CareReceiverInfoDetailList';

export interface Props extends CareReceiverInfoDetailListProps {}

const CareReceiverInfoDetailListContainer: React.SFC<Props> = props => (
  <CareReceiverInfoDetailList {...props} />
);

export interface OwnProps {
  readonly folderId: CareReceiverEntities['id'];
}

const mapStateToProps = (state: State, ownProps: OwnProps) => ({
  folderContents: getFolderContents(state, ownProps),
});

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) =>
  bindActionCreators<any, any>(
    {
      fetchCareReceivers: actions.fetchCareReceivers.started,
      editFolder: actions.editFolder.started,
      deleteFolder: actions.deleteFolder.started,
      addFolderContent: actions.addFolderContent.started,
    },
    dispatch
  );

export default mayBeStubbed(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CareReceiverInfoDetailListContainer)
);
