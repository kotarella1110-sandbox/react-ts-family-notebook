import * as React from 'react';
import { shallow } from 'enzyme';
import ModalTemplate from '.';

const setup = () => {
  const props = {
    header: 'Header',
    children: 'Children',
    footer: 'Footer',
    isOpen: true,
  };

  const wrapper = shallow(<ModalTemplate {...props} />);

  return { props, wrapper };
};

describe('ModalTemplate', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();

    const Header = wrapper.dive().find('Header');
    expect(Header.dive().type()).toBe('header');
    expect(Header.dive().contains('Header')).toBeTruthy();

    const Main = wrapper.dive().find('Main');
    expect(Main.dive().type()).toBe('main');
    expect(Main.dive().contains('Children')).toBeTruthy();

    const Footer = wrapper.dive().find('Footer');
    expect(Footer.dive().type()).toBe('footer');
    expect(Footer.dive().contains('Footer')).toBeTruthy();
  });
});
