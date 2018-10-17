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
import TextArea from '../../atoms/TextArea';
import FormContent from '../../molecules/FormContent';
import Header from '../../organisms/Header';
import CareReceiverInfoDetailMain from '../../organisms/CareReceiverInfoDetailMain';

export interface Props {
  readonly careReceiver: CareReceiverEntities;
  readonly folder: FolderEntities;
  readonly editFolder: (
    payload: ReturnType<typeof actions.editFolder.started>['payload']
  ) => any;
  readonly deleteFolder: (
    payload: ReturnType<typeof actions.deleteFolder.started>['payload']
  ) => any;
  readonly addFolderContent: (
    payload: ReturnType<typeof actions.addFolderContent.started>['payload']
  ) => any;
  readonly editFolderContent: (
    payload: ReturnType<typeof actions.editFolderContent.started>['payload']
  ) => any;
  readonly deleteFolderContent: (
    payload: ReturnType<typeof actions.deleteFolderContent.started>['payload']
  ) => any;
  readonly history?: any;
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

  readonly toggleFolderModal = () => {
    this.setState({
      ...this.state,
      folder: {
        ...this.state.folder,
        modalIsOpen: !this.state.folder.modalIsOpen,
      },
    });
  };

  readonly toggleFolderContentModal = (
    folderContent?: FolderContentEntities
  ) => {
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

  readonly handleDeleteFolder = () => {
    const careReceiverId = this.props.careReceiver.id;
    const folderId = this.props.folder.id;
    this.props.deleteFolder({
      careReceiverId,
      id: folderId,
    });
    this.toggleFolderModal();
  };

  readonly handleEditFolder = () => {
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

  readonly handleAddFolderContent = () => {
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

  readonly handleDeleteFolderContent = () => {
    const id = this.state.folderContent.id;
    const folderId = this.props.folder.id;
    this.props.deleteFolderContent({
      id,
      folderId,
    });
    this.toggleFolderContentModal();
  };

  readonly handleEditFolderContent = () => {
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

  readonly handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      folder: {
        ...this.state.folder,
        name: e.target.value,
      },
    });
  };

  readonly handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      folderContent: {
        ...this.state.folderContent,
        title: e.target.value,
      },
    });
  };

  readonly handleChangeContent = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    this.setState({
      ...this.state,
      folderContent: {
        ...this.state.folderContent,
        content: e.target.value,
      },
    });
  };

  render(): JSX.Element {
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
              right={
                <AddButton onClick={this.handleEditFolder}>投稿</AddButton>
              }
              title="タイトルの編集"
            />
          }
          footer={
            <SquareButton onClick={this.handleDeleteFolder}>削除</SquareButton>
          }
          isOpen={this.state.folder.modalIsOpen}>
          <FormContent label="タイトル">
            <Text
              onChange={this.handleChangeText}
              value={this.state.folder.name}
            />
          </FormContent>
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
                  <AddButton onClick={this.handleEditFolderContent}>
                    投稿
                  </AddButton>
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
          <FormContent label="項目名と内容">
            <Text
              onChange={this.handleChangeTitle}
              value={this.state.folderContent.title}
            />
            <TextArea
              onChange={this.handleChangeContent}
              value={this.state.folderContent.content}
            />
          </FormContent>
        </ModalTemplate>
      </div>
    );
  }
}

export default CareReceiverInfoDetailPage;
