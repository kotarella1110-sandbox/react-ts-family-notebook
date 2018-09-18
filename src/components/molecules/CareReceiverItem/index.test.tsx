import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverInfoItem, { Props } from '.';
import Item from '../Item';

const setup = (propOverrides = {}) => {
  const props: Props = {
    careReceiver: {
      id: 0,
      name: '左藤太郎',
      birth: '76歳 1941年1月15日生',
    },
    ...propOverrides,
  };

  const wrapper = shallow(<CareReceiverInfoItem {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('CareReceiverItem', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const {
      props: { careReceiver },
      wrapper,
    } = setup();
    expect(wrapper.type()).toBe(Item);
    expect(wrapper.prop('title')).toBe(careReceiver.name);
    expect(wrapper.prop('text')).toBe(careReceiver.birth);
  });
});
