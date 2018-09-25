import * as React from 'react';
import AppTemplate from '../../templates/AppTemplate';
import ModalTemplate from '../../templates/ModalTemplate';
import AddButton from '../../atoms/AddButton';
import Text from '../../atoms/Text';
import Content from '../../molecules/Content';
import Header from '../../organisms/Header';
import CareReceiverList from '../../organisms/CareReceiverList';

export interface Props {}

export interface State {
  modalIsOpen: boolean;
}

class CareReceiverPage extends React.Component<Props, State> {
  state = {
    modalIsOpen: false,
  };

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  render() {
    return (
      <div>
        <AppTemplate
          header={
            <Header
              right={<AddButton onClick={this.toggleModal}>追加</AddButton>}
              title="本人情報"
            />
          }>
          <CareReceiverList
            careReceivers={[
              {
                id: 0,
                name: '左藤太郎',
                birth: '76歳 1941年1月15日生',
                folders: [{ id: 0, name: 'Title1' }, { id: 1, name: 'Title2' }],
              },
              {
                id: 1,
                name: '左藤二郎',
                birth: '76歳 1941年2月13日生',
                folders: [{ id: 0, name: 'Title1' }, { id: 1, name: 'Title2' }],
              },
            ]}
          />
        </AppTemplate>
        <ModalTemplate
          header={
            <Header
              left={<a onClick={this.toggleModal}>キャンセル</a>}
              right={<AddButton>追加</AddButton>}
              title="タイトルの追加"
            />
          }
          isOpen={this.state.modalIsOpen}>
          <Content label="タイトル">
            <Text />
          </Content>
        </ModalTemplate>
      </div>
    );
  }
}

export default CareReceiverPage;
