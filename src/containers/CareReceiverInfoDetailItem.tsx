import { connect } from 'react-redux';
import { mayBeStubbed } from 'react-stubber';
import { State, FolderContentEntities } from 'models';
import { getFolderContent } from 'store/selectors';
import CareReceiverInfoDetailItem from 'components/molecules/CareReceiverInfoDetailItem';

export interface OwnProps {
  readonly folderContentId: FolderContentEntities['id'];
  readonly onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const mapStateToProps = (state: State, ownProps: OwnProps) => ({
  ...ownProps,
  folderContent: getFolderContent(state, ownProps),
});

const CareReceiverInfoDetailItemContainer = connect(mapStateToProps)(
  CareReceiverInfoDetailItem
);

export default mayBeStubbed(CareReceiverInfoDetailItemContainer);
