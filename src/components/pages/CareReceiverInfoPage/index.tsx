import * as React from 'react';
import { CareReceiverEntities } from 'models';
import * as actions from 'store/actions';
import AppTemplate from '../../templates/AppTemplate';
import ModalTemplate from '../../templates/ModalTemplate';
import AddButton from '../../atoms/AddButton';
import Text from '../../atoms/Text';
import Content from '../../molecules/FormContent';
import Header from '../../organisms/Header';
import CareReceiverInfoMain from '../../organisms/CareReceiverInfoMain';

export interface Props {
  readonly careReceiver: CareReceiverEntities;
  readonly fetchCareReceivers: () => any;
  readonly addFolder: (
    payload: ReturnType<typeof actions.addFolder.started>['payload']
  ) => any;
}

export interface State {
  readonly modalIsOpen: boolean;
  readonly name: string;
}

class CareReceiverInfoPage extends React.Component<Props, State> {
  readonly state: State = {
    modalIsOpen: false,
    name: '',
  };

  componentDidMount(): void {
    this.props.fetchCareReceivers();
  }

  readonly toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  readonly handleAddFolder = () => {
    const careReceiverId = this.props.careReceiver.id;
    const name = this.state.name;
    if (name.length !== 0) {
      this.props.addFolder({
        careReceiverId,
        name,
      });

      this.toggleModal();
    }
  };

  readonly handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value });
  };

  render(): JSX.Element {
    return (
      <div>
        <AppTemplate
          header={
            <Header
              right={<AddButton onClick={this.toggleModal}>追加</AddButton>}
              title="本人情報"
            />
          }>
          {this.props.careReceiver && (
            <CareReceiverInfoMain careReceiver={this.props.careReceiver} />
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

export default CareReceiverInfoPage;
