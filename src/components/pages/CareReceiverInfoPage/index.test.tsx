import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverInfoPage, { Props } from '.';
import AppTemplate from '../../templates/AppTemplate';
import ModalTemplate from '../../templates/ModalTemplate';

const setup = () => {
  const props: Props = {
    careReceiver: {
      id: 0,
      name: '左藤太郎',
      birth: '76歳 1941年1月15日生',
      folders: [0, 1],
    },
    fetchCareReceivers: jest.fn(),
    addFolder: jest.fn(),
  };

  const wrapper = shallow(<CareReceiverInfoPage {...props} />);

  return { props, wrapper };
};

describe('CareReceiverInfoPage', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.type()).toBe('div');
    expect(wrapper.find('AppTemplate').type()).toBe(AppTemplate);
    expect(wrapper.find('ModalTemplate').type()).toBe(ModalTemplate);
  });
});
