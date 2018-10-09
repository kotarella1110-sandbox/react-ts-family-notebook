import * as React from 'react';
import { shallow } from 'enzyme';
import Link from '.';
import { Link as ReactRouterLink } from 'react-router-dom';

const setup = () => {
  const props = {
    to: '',
  };

  const wrapper = shallow(<Link {...props} />);

  return {
    wrapper,
  };
};

describe('Link', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.type()).toBe(ReactRouterLink);
  });
});
