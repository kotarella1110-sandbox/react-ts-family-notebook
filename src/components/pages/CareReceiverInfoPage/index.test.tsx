import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverInfoPage, { Props } from '.';
import AppTemplate from '../../templates/AppTemplate';
import ModalTemplate from '../../templates/ModalTemplate';

const setup = () => {
  const props: Props = {
    careReceiver: {
      id: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
      name: '左藤太郎',
      birth: '76歳 1941年1月15日生',
      folders: [
        'c430c8ef-868f-4189-9e53-c64151882e40',
        '71f24b4d-8816-4563-8526-a257f0bed1a2',
      ],
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
