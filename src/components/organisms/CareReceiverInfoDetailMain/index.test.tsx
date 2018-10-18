import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverInfoDetailMain, { Props } from '.';

const setup = (propOverrides = {}) => {
  const props: Props = {
    careReceiver: {
      id: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
      name: '左藤太郎',
      birth: '76歳 1941年1月15日生',
      folders: [
        'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
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
    toggleFolderModal: jest.fn(),
    toggleFolderContentModal: jest.fn(),
    ...propOverrides,
  };

  const wrapper = shallow(<CareReceiverInfoDetailMain {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('CareReceiverInfoDetailMain', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const {
      props: { careReceiver },
      wrapper,
    } = setup();
    expect(wrapper.dive().type()).toBe('div');

    const CareReceiverItem = wrapper.find('CareReceiverItem');
    expect(CareReceiverItem.prop('careReceiver')).toEqual(careReceiver);
  });
});
