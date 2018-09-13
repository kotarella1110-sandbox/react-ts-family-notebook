import * as React from 'react';
import { shallow } from 'enzyme';
import Header from '.';

const setup = () => {
  const props = {
    left: <p>Left</p>,
    right: <p>Right</p>,
    title: 'Title',
  };

  const wrapper = shallow(<Header {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Header', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.dive().type()).toBe('div');

    const Left = wrapper.find('Left');
    expect(Left.dive().type()).toBe('div');
    expect(Left.dive().contains(<p>Left</p>)).toBeTruthy();

    const Right = wrapper.find('Right');
    expect(Right.dive().type()).toBe('div');
    expect(Right.dive().contains(<p>Right</p>)).toBeTruthy();

    const Title = wrapper.find('Title');
    expect(Title.dive().type()).toBe('h2');
    expect(Title.dive().text()).toBe('Title');
  });
});
