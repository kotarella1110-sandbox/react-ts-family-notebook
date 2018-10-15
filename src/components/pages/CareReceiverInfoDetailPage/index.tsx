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
  editFolder: (
    payload: ReturnType<typeof actions.editFolder.started>['payload']
  ) => any;
  deleteFolder: (
    payload: ReturnType<typeof actions.deleteFolder.started>['payload']
  ) => any;
  addFolderContent: (
    payload: ReturnType<typeof actions.addFolderContent.started>['payload']
  ) => any;
  editFolderContent: (
    payload: ReturnType<typeof actions.editFolderContent.started>['payload']
  ) => any;
  deleteFolderContent: (
    payload: ReturnType<typeof actions.deleteFolderContent.started>['payload']
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
    readonly editing: boolean;
    readonly id: FolderContentEntities['id'];
    readonly title: FolderContentEntities['title'];
    readonly content: FolderContentEntities['content'];
  };
}

class CareReceiverInfoDetailPage extends React.Component<Props, State> {
  readonly state: State = {
    folder: {
      modalIsOpen: false,
      name: this.props.folder && this.props.folder.name,
    },
    folderContent: {
      modalIsOpen: false,
      editing: false,
      id: '',
      title: '',
      content: '',
    },
  };

  toggleFolderModal = () => {
    this.setState({
      ...this.state,
      folder: {
        ...this.state.folder,
        modalIsOpen: !this.state.folder.modalIsOpen,
      },
    });
  };

  toggleFolderContentModal = (folderContent?: FolderContentEntities) => {
    if (!!folderContent) {
      this.setState({
        ...this.state,
        folderContent: {
          ...this.state.folderContent,
          modalIsOpen: !this.state.folderContent.modalIsOpen,
          editing: true,
          id: folderContent.id,
          title: folderContent.title,
          content: folderContent.content,
        },
      });
    } else {
      this.setState({
        ...this.state,
        folderContent: {
          ...this.state.folderContent,
          modalIsOpen: !this.state.folderContent.modalIsOpen,
          editing: false,
        },
      });
    }
  };

  handleDeleteFolder = () => {
    const careReceiverId = this.props.careReceiver.id;
    const folderId = this.props.folder.id;
    this.props.deleteFolder({
      careReceiverId,
      id: folderId,
    });
    this.toggleFolderModal();
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
    }
    this.toggleFolderModal();
  };

  handleAddFolderContent = () => {
    const folderId = this.props.folder.id;
    const { title, content } = this.state.folderContent;
    if (title.length !== 0) {
      this.props.addFolderContent({
        folderId,
        title,
        content,
      });
      this.toggleFolderContentModal();
    }
  };

  handleDeleteFolderContent = () => {
    const id = this.state.folderContent.id;
    const folderId = this.props.folder.id;
    this.props.deleteFolderContent({
      id,
      folderId,
    });
    this.toggleFolderContentModal();
  };

  handleEditFolderContent = () => {
    const folderId = this.props.folder.id;
    const { id, title, content } = this.state.folderContent;
    if (title.length === 0) {
      this.props.deleteFolderContent({
        folderId,
        id,
      });
    } else {
      this.props.editFolderContent({
        folderId,
        id,
        title,
        content,
      });
    }
    this.toggleFolderContentModal();
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
                <AddButton
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => {
                    this.toggleFolderContentModal();
                  }}>
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
              toggleFolderContentModal={this.toggleFolderContentModal}
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
              left={
                <a
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => {
                    this.toggleFolderContentModal();
                  }}>
                  キャンセル
                </a>
              }
              right={
                this.state.folderContent.editing ? (
                  <a onClick={this.handleEditFolderContent}>編集</a>
                ) : (
                  <AddButton onClick={this.handleAddFolderContent}>
                    追加
                  </AddButton>
                )
              }
              title={`項目の${
                this.state.folderContent.editing ? '編集' : '追加'
              }`}
            />
          }
          footer={
            this.state.folderContent.editing ? (
              <SquareButton onClick={this.handleDeleteFolderContent}>
                削除
              </SquareButton>
            ) : null
          }
          isOpen={this.state.folderContent.modalIsOpen}>
          <Content label="項目名">
            <Text
              onChange={this.handleChangeTitle}
              value={this.state.folderContent.title}
            />
          </Content>
          <Content label="内容">
            <Text
              onChange={this.handleChangeContent}
              value={this.state.folderContent.content}
            />
          </Content>
        </ModalTemplate>
      </div>
    );
  }
}

export default CareReceiverInfoDetailPage;
