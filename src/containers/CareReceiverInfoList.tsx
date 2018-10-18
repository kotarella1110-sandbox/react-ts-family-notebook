import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Action } from 'typescript-fsa';
import { mayBeStubbed } from 'react-stubber';
import { State, CareReceiverEntities } from 'models';
import { getFolders } from 'store/selectors';
import * as actions from 'store/actions';
import CareReceiverInfoList, {
  Props as CareReceiverInfoListProps,
} from 'components/organisms/CareReceiverInfoList';

export interface Props extends CareReceiverInfoListProps {}

const CareReceiverInfoListContainer: React.SFC<Props> = props => (
  <CareReceiverInfoList {...props} />
);

export interface OwnProps {
  readonly careReceiverId: CareReceiverEntities['id'];
}

const mapStateToProps = (state: State, ownProps: OwnProps) => ({
  folders: getFolders(state, ownProps),
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
  )(CareReceiverInfoListContainer)
);
