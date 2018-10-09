import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverInfoDetailMain, { Props } from '.';

const setup = (propOverrides = {}) => {
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
    toggleFolderModal: jest.fn(),
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
      props: { careReceiver, folder },
      wrapper,
    } = setup();
    expect(wrapper.dive().type()).toBe('div');

    const CareReceiverItem = wrapper.find('CareReceiverItem');
    expect(CareReceiverItem.prop('careReceiver')).toEqual(careReceiver);

    const CareReceiverInfoDetailList = wrapper.find(
      'CareReceiverInfoDetailList'
    );
    expect(CareReceiverInfoDetailList.prop('folderContentIds')).toEqual(
      folder.contents
    );
  });
});
