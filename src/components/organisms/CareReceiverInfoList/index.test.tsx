import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverInfoList, { Props } from '.';

const setup = (propOverrides = {}) => {
  const props: Props = {
    folders: [
      { id: 0, careReceiverId: 0, name: 'Title1' },
      { id: 1, careReceiverId: 0, name: 'Title2' },
    ],
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
      props: { folders, onClick },
      wrapper,
    } = setup({ onClick: jest.fn() });
    expect(wrapper.children().length).toBe(2);

    wrapper.children().forEach((LI, index) => {
      const CareReceiverInfoItem = LI.find('CareReceiverInfoItem');
      expect(Number(LI.key())).toBe(folders[index].id);
      expect(CareReceiverInfoItem.prop('folder')).toEqual(folders[index]);
      expect(CareReceiverInfoItem.prop('onClick')).toBe(onClick);
    });
  });
});
