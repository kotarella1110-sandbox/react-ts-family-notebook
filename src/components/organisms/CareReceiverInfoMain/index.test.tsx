import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverInfoMain, { Props } from '.';

const setup = (propOverrides = {}) => {
  const props: Props = {
    careReceiver: {
      id: 0,
      name: '左藤太郎',
      birth: '76歳 1941年1月15日生',
      folders: [0, 1],
    },
    onClick: jest.fn(),
    ...propOverrides,
  };

  const wrapper = shallow(<CareReceiverInfoMain {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('CareReceiverInfoMain', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const {
      props: { careReceiver, onClick },
      wrapper,
    } = setup();
    expect(wrapper.dive().type()).toBe('div');

    const CareReceiverItem = wrapper.find('CareReceiverItem');
    expect(CareReceiverItem.prop('careReceiver')).toEqual(careReceiver);

    const CareReceiverInfoList = wrapper.find('CareReceiverInfoList');
    expect(CareReceiverInfoList.prop('folderIds')).toEqual(
      careReceiver.folders
    );
    expect(CareReceiverInfoList.prop('onClick')).toBe(onClick);
  });
});
