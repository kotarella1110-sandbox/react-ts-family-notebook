import * as React from 'react';
import { CareReceiver } from 'models';
import AppTemplate from '../../templates/AppTemplate';
import ModalTemplate from '../../templates/ModalTemplate';
import AddButton from '../../atoms/AddButton';
import Text from '../../atoms/Text';
import Content from '../../molecules/Content';
import Header from '../../organisms/Header';
import CareReceiverList from '../../organisms/CareReceiverList';

export interface Props {
  careReceivers: CareReceiver[];
  fetchCareReceivers: () => any;
  addFolder: (
    payload: {
      careReceiverId: number;
      name: string;
    }
  ) => any;
}

export interface State {
  readonly modalIsOpen: boolean;
  readonly name: string;
}

class CareReceiverPage extends React.Component<Props, State> {
  readonly state: State = {
    modalIsOpen: false,
    name: '',
  };

  componentDidMount() {
    this.props.fetchCareReceivers();
  }

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  handleAddFolder = () => {
    const careReceiverId = this.props.careReceivers[0].id;
    const name = this.state.name;
    if (name.length !== 0) {
      this.props.addFolder({
        careReceiverId,
        name,
      });

      this.toggleModal();
    }
  };

  handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value });
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
          {this.props.careReceivers && (
            <CareReceiverList careReceivers={this.props.careReceivers} />
          )}
        </AppTemplate>
        <ModalTemplate
          header={
            <Header
              left={<a onClick={this.toggleModal}>キャンセル</a>}
              right={<AddButton onClick={this.handleAddFolder}>追加</AddButton>}
              title="タイトルの追加"
            />
          }
          isOpen={this.state.modalIsOpen}>
          <Content label="タイトル">
            <Text onChange={this.handleChangeText} />
          </Content>
        </ModalTemplate>
      </div>
    );
  }
}

export default CareReceiverPage;
