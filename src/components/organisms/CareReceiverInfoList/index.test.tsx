import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverInfoList, { Props } from '.';

const setup = (propOverrides = {}) => {
  const props: Props = {
    careReceiverId: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
    folderIds: [
      'c430c8ef-868f-4189-9e53-c64151882e40',
      '71f24b4d-8816-4563-8526-a257f0bed1a2',
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
      props: { folderIds },
      wrapper,
    } = setup({ onClick: jest.fn() });
    expect(wrapper.children().length).toBe(2);

    wrapper.children().forEach((LI, index) => {
      const CareReceiverInfoItem = LI.find('Connect(CareReceiverInfoItem)');
      expect(LI.key()).toBe(folderIds[index]);
      expect(CareReceiverInfoItem.prop('folderId')).toEqual(folderIds[index]);
    });
  });
});
