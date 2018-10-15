import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverInfoDetailPage, { Props } from '.';
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
    folder: {
      id: 'c430c8ef-868f-4189-9e53-c64151882e40',
      careReceiverId: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
      name: '病歴やアレルギーなど',
      contents: [
        'c430c8ef-868f-4189-9e53-c64151882e40',
        '7145db67-df4d-4df2-9747-8ffbcf4dff68',
      ],
    },
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
