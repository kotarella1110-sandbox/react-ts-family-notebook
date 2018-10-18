import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverInfoList, { Props } from '.';

const setup = (propOverrides = {}) => {
  const props: Props = {
    careReceiverId: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
    folders: [
      {
        id: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
        careReceiverId: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
        name: '病歴やアレルギーなど',
      },
      {
        id: '71f24b4d-8816-4563-8526-a257f0bed1a2',
        careReceiverId: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
        name: 'お薬情報',
      },
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
      props: { folders },
      wrapper,
    } = setup({ onClick: jest.fn() });
    expect(wrapper.children().length).toBe(2);

    wrapper.children().forEach((LI, index) => {
      const CareReceiverInfoItem = LI.find('CareReceiverInfoItem');
      expect(LI.key()).toBe(folders[index].id);
      expect(CareReceiverInfoItem.prop('folder')).toEqual(folders[index]);
    });
  });
});
