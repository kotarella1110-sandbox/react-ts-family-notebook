import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverInfoItem, { Props } from '.';
import Item from '../Item';

const setup = (propOverrides = {}) => {
  const props: Props = {
    folder: {
      id: 0,
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

  it('Item コンポーネントの click で props.onClick が呼ばれること', () => {
    const {
      props: { onClick },
      wrapper,
    } = setup({ onClick: jest.fn() });
    wrapper.props().onClick();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
