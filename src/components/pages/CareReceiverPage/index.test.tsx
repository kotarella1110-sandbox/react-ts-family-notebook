import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverPage from '.';
import AppTemplate from '../../templates/AppTemplate';
import ModalTemplate from '../../templates/ModalTemplate';

const setup = () => {
  const props = {
    careReceivers: [
      {
        id: 0,
        name: '左藤太郎',
        birth: '76歳 1941年1月15日生',
        folders: [
          { id: 0, careReceiverId: 0, name: 'Title1' },
          { id: 1, careReceiverId: 0, name: 'Title2' },
        ],
      },
      {
        id: 1,
        name: '左藤二郎',
        birth: '76歳 1941年2月13日生',
        folders: [
          { id: 0, careReceiverId: 1, name: 'Title1' },
          { id: 1, careReceiverId: 1, name: 'Title2' },
        ],
      },
    ],
    fetchCareReceivers: jest.fn(),
    addFolder: jest.fn(),
  };

  const wrapper = shallow(<CareReceiverPage {...props} />);

  return { props, wrapper };
};

describe('CareReceiverPage', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.type()).toBe('div');
    expect(wrapper.find('AppTemplate').type()).toBe(AppTemplate);
    expect(wrapper.find('ModalTemplate').type()).toBe(ModalTemplate);
  });
});
