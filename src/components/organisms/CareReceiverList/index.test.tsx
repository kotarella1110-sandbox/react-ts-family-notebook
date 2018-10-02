import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverList, { Props } from '.';

const setup = (propOverrides = {}) => {
  const props: Props = {
    careReceivers: [
      {
        id: 0,
        name: '左藤太郎',
        birth: '76歳 1941年1月15日生',
        folders: [0, 1],
      },
      {
        id: 1,
        name: '左藤二郎',
        birth: '76歳 1941年2月13日生',
        folders: [2, 3],
      },
    ],
    ...propOverrides,
  };

  const wrapper = shallow(<CareReceiverList {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('CareReceiverList', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.dive().type()).toBe('ul');
  });

  it('LI、CareReceiverItem、CareReceiverInfoList コンポーネントがレンダリングされていること', () => {
    const {
      props: { careReceivers, onClick },
      wrapper,
    } = setup({ onClick: jest.fn() });
    expect(wrapper.children().length).toBe(2);

    wrapper.children().forEach((LI, index) => {
      const CareReceiverItem = LI.find('CareReceiverItem');
      const CareReceiverInfoList = LI.find('CareReceiverInfoList');
      expect(Number(LI.key())).toBe(careReceivers[index].id);
      expect(CareReceiverItem.prop('careReceiver')).toEqual(
        careReceivers[index]
      );
      expect(CareReceiverInfoList.prop('folderIds')).toEqual(
        careReceivers[index].folders
      );
      expect(CareReceiverInfoList.prop('onClick')).toBe(onClick);
    });
  });
});
