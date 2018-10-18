import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Action } from 'typescript-fsa';
import { mayBeStubbed } from 'react-stubber';
import { State, CareReceiverEntities, FolderEntities } from 'models';
import { getCareReceiver, getFolder } from 'store/selectors';
import * as actions from 'store/actions';
import CareReceiverInfoDetailPage, {
  Props as CareReceiverInfoDetailPageProps,
} from 'components/pages/CareReceiverInfoDetailPage';

export interface Props extends CareReceiverInfoDetailPageProps {
  readonly fetchFolderContents: (
    payload: ReturnType<typeof actions.fetchFolderContents.started>['payload']
  ) => any;
}

class CareReceiverInfoDetailPageContainer extends React.Component<Props> {
  componentDidMount(): void {
    const { folder, fetchFolderContents } = this.props;
    fetchFolderContents({ folderId: folder.id });
  }

  render(): JSX.Element {
    const { fetchFolderContents, ...props } = this.props;
    return <CareReceiverInfoDetailPage {...props} />;
  }
}

export interface OwnProps {
  readonly careReceiverId: CareReceiverEntities['id'];
  readonly folderId: FolderEntities['id'];
}

const mapStateToProps = (
  state: State,
  { match: { params } }: RouteComponentProps<OwnProps>
) => {
  const props = {
    careReceiverId: params.careReceiverId,
    folderId: params.folderId,
  };
  return {
    careReceiver: getCareReceiver(state, props),
    folder: getFolder(state, props),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) =>
  bindActionCreators<any, any>(
    {
      editFolder: actions.editFolder.started,
      deleteFolder: actions.deleteFolder.started,
      fetchFolderContents: actions.fetchFolderContents.started,
      addFolderContent: actions.addFolderContent.started,
      editFolderContent: actions.editFolderContent.started,
      deleteFolderContent: actions.deleteFolderContent.started,
    },
    dispatch
  );

export default mayBeStubbed(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CareReceiverInfoDetailPageContainer)
);
