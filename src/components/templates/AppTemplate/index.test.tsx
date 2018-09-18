import * as React from 'react';
import { shallow } from 'enzyme';
import AppTemplate from '.';

const setup = () => {
  const props = {
    header: 'Header',
    children: 'Main',
  };

  const wrapper = shallow(<AppTemplate {...props} />);

  return { props, wrapper };
};

describe('AppTemplate', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.dive().type()).toBe('div');

    const Header = wrapper.find('Header');
    expect(Header.dive().type()).toBe('header');
    expect(Header.dive().prop('children')).toBe('Header');

    const Main = wrapper.find('Main');
    expect(Main.dive().type()).toBe('main');
    expect(Main.dive().prop('children')).toBe('Main');
  });
});
