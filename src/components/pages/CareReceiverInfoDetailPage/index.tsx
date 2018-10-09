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
import SquareButton from '../../atoms/SquareButton';
import Text from '../../atoms/Text';
import Content from '../../molecules/Content';
import Header from '../../organisms/Header';
import CareReceiverInfoDetailMain from '../../organisms/CareReceiverInfoDetailMain';

export interface Props {
  readonly careReceiver: CareReceiverEntities;
  readonly folder: FolderEntities;
  fetchCareReceivers: () => any;
  editFolder: (
    payload: ReturnType<typeof actions.editFolder>['payload']
  ) => any;
  deleteFolder: (
    payload: ReturnType<typeof actions.deleteFolder>['payload']
  ) => any;
  addFolderContent: (
    payload: ReturnType<typeof actions.addFolderContent.started>['payload']
  ) => any;
  history?: any;
}

export interface State {
  readonly folder: {
    readonly modalIsOpen: boolean;
    readonly name: FolderEntities['name'];
  };
  readonly folderContent: {
    readonly modalIsOpen: boolean;
    readonly title: FolderContentEntities['title'];
    readonly content: FolderContentEntities['content'];
  };
}

class CareReceiverInfoDetailPage extends React.Component<Props, State> {
  readonly state: State = {
    folder: {
      modalIsOpen: false,
      name: this.props.folder.name,
    },
    folderContent: {
      modalIsOpen: false,
      title: '',
      content: '',
    },
  };

  componentDidMount() {
    this.props.fetchCareReceivers();
  }

  toggleFolderModal = () => {
    this.setState({
      ...this.state,
      folder: {
        ...this.state.folder,
        modalIsOpen: !this.state.folder.modalIsOpen,
      },
    });
  };

  toggleFolderContentModal = () => {
    this.setState({
      ...this.state,
      folderContent: {
        ...this.state.folderContent,
        modalIsOpen: !this.state.folderContent.modalIsOpen,
      },
    });
  };

  handleDeleteFolder = () => {
    const careReceiverId = this.props.careReceiver.id;
    const folderId = this.props.folder.id;
    this.props.deleteFolder({
      careReceiverId,
      id: folderId,
    });
  };

  handleEditFolder = () => {
    const careReceiverId = this.props.careReceiver.id;
    const folderId = this.props.folder.id;
    const name = this.state.folder.name;
    if (name.length === 0) {
      this.props.deleteFolder({
        careReceiverId,
        id: folderId,
      });
    } else {
      this.props.editFolder({
        careReceiverId,
        name,
        id: folderId,
      });

      this.toggleFolderModal();
    }
  };

  handleAddFolderContent = () => {
    const folderId = this.props.folder.id;
    const title = this.state.folderContent.title;
    const content = this.state.folderContent.content;
    if (title.length !== 0) {
      this.props.addFolderContent({
        folderId,
        title,
        content,
      });
      this.toggleFolderContentModal();
    }
  };

  handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      folder: {
        ...this.state.folder,
        name: e.target.value,
      },
    });
  };

  handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      folderContent: {
        ...this.state.folderContent,
        title: e.target.value,
      },
    });
  };

  handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      folderContent: {
        ...this.state.folderContent,
        content: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <AppTemplate
          header={
            <Header
              // tslint:disable-next-line:jsx-no-lambda
              left={<ArrowButton onClick={() => this.props.history.goBack()} />}
              right={
                <AddButton onClick={this.toggleFolderContentModal}>
                  追加
                </AddButton>
              }
              title="本人情報詳細"
            />
          }>
          {this.props.folder && (
            <CareReceiverInfoDetailMain
              careReceiver={this.props.careReceiver}
              folder={this.props.folder}
              toggleFolderModal={this.toggleFolderModal}
            />
          )}
        </AppTemplate>
        <ModalTemplate
          header={
            <Header
              left={<a onClick={this.toggleFolderModal}>キャンセル</a>}
              right={<a onClick={this.handleEditFolder}>編集</a>}
              title="タイトルの編集"
            />
          }
          footer={
            <SquareButton onClick={this.handleDeleteFolder}>削除</SquareButton>
          }
          isOpen={this.state.folder.modalIsOpen}>
          <Content label="タイトル">
            <Text
              onChange={this.handleChangeText}
              value={this.state.folder.name}
            />
          </Content>
        </ModalTemplate>
        <ModalTemplate
          header={
            <Header
              left={<a onClick={this.toggleFolderContentModal}>キャンセル</a>}
              right={
                <AddButton onClick={this.handleAddFolderContent}>
                  追加
                </AddButton>
              }
              title="タイトルの追加"
            />
          }
          isOpen={this.state.folderContent.modalIsOpen}>
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
