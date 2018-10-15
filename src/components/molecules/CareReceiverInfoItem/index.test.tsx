import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverInfoItem, { Props } from '.';
import Item from '../Item';

const setup = (propOverrides = {}) => {
  const props: Props = {
    folder: {
      id: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
      careReceiverId: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
      name: 'Name',
    },
    ...propOverrides,
  };

  const wrapper = shallow(<CareReceiverInfoItem {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('CareReceiverInfoItem', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const {
      props: { folder },
      wrapper,
    } = setup();
    expect(wrapper.type()).toBe(Item);

    const Title = wrapper.find('Title');
    expect(Title.dive().type()).toBe('h4');
    expect(Title.dive().text()).toBe(folder.name);
  });
});
