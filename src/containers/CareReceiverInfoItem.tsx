import { connect } from 'react-redux';
import { mayBeStubbed } from 'react-stubber';
import { State, FolderEntities } from 'models';
import { getFolder } from 'store/selectors';
import CareReceiverInfoItem from 'components/molecules/CareReceiverInfoItem';

export interface OwnProps {
  folderId: FolderEntities['id'];
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const mapStateToProps = (state: State, ownProps: OwnProps) => ({
  ...ownProps,
  folder: getFolder(state, ownProps),
});

const CareReceiverInfoItemContainer = connect(mapStateToProps)(
  CareReceiverInfoItem
);

export default mayBeStubbed(CareReceiverInfoItemContainer);