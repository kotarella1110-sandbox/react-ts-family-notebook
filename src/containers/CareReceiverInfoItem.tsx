import { connect } from 'react-redux';
import { mayBeStubbed } from 'react-stubber';
import CareReceiverInfoItem from 'components/molecules/CareReceiverInfoItem';
import { State } from 'models';

export interface OwnProps {
  folderId: number;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const mapStateToProps = (
  { folders }: State,
  { folderId, ...ownProps }: OwnProps
) => ({
  ...ownProps,
  folder: folders[folderId],
});

const CareReceiverInfoItemContainer = connect(mapStateToProps)(
  CareReceiverInfoItem
);

export default mayBeStubbed(CareReceiverInfoItemContainer);
