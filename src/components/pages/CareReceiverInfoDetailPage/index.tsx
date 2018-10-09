import * as React from 'react';
import {
  CareReceiverEntities,
  FolderEntities,
  FolderContentEntities,
} from 'models';
import * as actions from 'store/actions';
import AppTemplate from '../../templates/AppTemplate';
import ModalTemplate from '../../templates/ModalTemplate';
import ArrowButton from '../../atoms/ArrowButton';
import AddButton from '../../atoms/AddButton';
import Text from '../../atoms/Text';
import Content from '../../molecules/Content';
import Header from '../../organisms/Header';
import CareReceiverInfoDetailMain from '../../organisms/CareReceiverInfoDetailMain';

export interface Props {
  readonly careReceiver: CareReceiverEntities;
  readonly folder: FolderEntities;
  fetchCareReceivers: () => any;
  addFolderContent: (
    payload: ReturnType<typeof actions.addFolderContent.started>['payload']
  ) => any;
  history?: any;
}

export interface State {
  readonly modalIsOpen: boolean;
  readonly title: FolderContentEntities['title'];
  readonly content: FolderContentEntities['content'];
}

class CareReceiverInfoDetailPage extends React.Component<Props, State> {
  readonly state: State = {
    modalIsOpen: false,
    title: '',
    content: '',
  };

  componentDidMount() {
    this.props.fetchCareReceivers();
  }

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  handleAddFolderContent = () => {
    const folderId = this.props.folder.id;
    const title = this.state.title;
    const content = this.state.content;
    if (title.length !== 0) {
      this.props.addFolderContent({
        folderId,
        title,
        content,
      });
      this.toggleModal();
    }
  };

  handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ title: e.target.value });
  };

  handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ content: e.target.value });
  };

  render() {
    return (
      <div>
        <AppTemplate
          header={
            <Header
              // tslint:disable-next-line:jsx-no-lambda
              left={<ArrowButton onClick={() => this.props.history.goBack()} />}
              right={<AddButton onClick={this.toggleModal}>追加</AddButton>}
              title="本人情報詳細"
            />
          }>
          {this.props.folder && (
            <CareReceiverInfoDetailMain
              careReceiver={this.props.careReceiver}
              folder={this.props.folder}
            />
          )}
        </AppTemplate>
        <ModalTemplate
          header={
            <Header
              left={<a onClick={this.toggleModal}>キャンセル</a>}
              right={
                <AddButton onClick={this.handleAddFolderContent}>
                  追加
                </AddButton>
              }
              title="タイトルの追加"
            />
          }
          isOpen={this.state.modalIsOpen}>
          <Content label="タイトル">
            <Text onChange={this.handleChangeTitle} />
          </Content>
          <Content label="内容">
            <Text onChange={this.handleChangeContent} />
          </Content>
        </ModalTemplate>
      </div>
    );
  }
}

export default CareReceiverInfoDetailPage;
