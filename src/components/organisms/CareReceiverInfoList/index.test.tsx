import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverInfoList, { Props } from '.';

const setup = (propOverrides = {}) => {
  const props: Props = {
    folderIds: [0, 1],
    ...propOverrides,
  };

  const wrapper = shallow(<CareReceiverInfoList {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('CareReceiverInfoList', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.dive().type()).toBe('ul');
  });

  it('LI、CareReceiverInfoItem コンポーネントがレンダリングされていること', () => {
    const {
      props: { folderIds, onClick },
      wrapper,
    } = setup({ onClick: jest.fn() });
    expect(wrapper.children().length).toBe(2);

    wrapper.children().forEach((LI, index) => {
      const CareReceiverInfoItem = LI.find('Connect(CareReceiverInfoItem)');
      expect(Number(LI.key())).toBe(folderIds[index]);
      expect(CareReceiverInfoItem.prop('folderId')).toEqual(folderIds[index]);
      expect(CareReceiverInfoItem.prop('onClick')).toBe(onClick);
    });
  });
});
