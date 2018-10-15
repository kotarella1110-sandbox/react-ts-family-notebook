import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverInfoMain, { Props } from '.';

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
      props: { careReceiver },
      wrapper,
    } = setup();
    expect(wrapper.dive().type()).toBe('div');

    const CareReceiverItem = wrapper.find('CareReceiverItem');
    expect(CareReceiverItem.prop('careReceiver')).toEqual(careReceiver);

    const CareReceiverInfoList = wrapper.find('CareReceiverInfoList');
    expect(CareReceiverInfoList.prop('folderIds')).toEqual(
      careReceiver.folders
    );
  });
});
