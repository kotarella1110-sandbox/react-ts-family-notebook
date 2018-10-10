import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverInfoDetailPage, { Props } from '.';
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
    folder: {
      id: 0,
      careReceiverId: 0,
      name: '病歴やアレルギーなど',
      contents: [0, 1],
    },
    fetchCareReceivers: jest.fn(),
    editFolder: jest.fn(),
    deleteFolder: jest.fn(),
    addFolderContent: jest.fn(),
    editFolderContent: jest.fn(),
    deleteFolderContent: jest.fn(),
  };

  const wrapper = shallow(<CareReceiverInfoDetailPage {...props} />);

  return { props, wrapper };
};

describe('CareReceiverInfoDetailPage', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.type()).toBe('div');
    expect(wrapper.find('AppTemplate').type()).toBe(AppTemplate);
    expect(
      wrapper
        .find('ModalTemplate')
        .at(0)
        .type()
    ).toBe(ModalTemplate);
    expect(
      wrapper
        .find('ModalTemplate')
        .at(1)
        .type()
    ).toBe(ModalTemplate);
  });
});
