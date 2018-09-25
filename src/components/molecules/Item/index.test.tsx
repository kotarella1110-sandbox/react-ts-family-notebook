import * as React from 'react';
import { shallow } from 'enzyme';
import Item, { Props } from '.';
import Icon from '../../atoms/Icon';

const setup = (propOverrides = {}) => {
  const props: Props = {
    children: 'Title',
    icon: <Icon icon="add" />,
    ...propOverrides,
  };

  const wrapper = shallow(<Item {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Item', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.dive().type()).toBe('a');

    const Contents = wrapper.find('Contents');
    expect(Contents.dive().type()).toBe('div');
    expect(Contents.dive().prop('children')).toBe('Title');

    const Text = wrapper.find('Text');
    expect(Text.exists()).toBeFalsy();

    const Right = wrapper.find('Right');
    expect(Right.exists()).toBeFalsy();
  });

  it('props.right を渡した際に Right コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup({ right: <p>Right</p> });
    const Right = wrapper.find('Right');
    expect(Right.dive().type()).toBe('div');
    expect(Right.dive().contains(<p>Right</p>)).toBeTruthy();
  });

  it('Wrapper コンポーネントの click で props.onClick が呼ばれること', () => {
    const {
      props: { onClick },
      wrapper,
    } = setup({ onClick: jest.fn() });
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
