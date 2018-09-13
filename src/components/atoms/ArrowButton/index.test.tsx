import * as React from 'react';
import { shallow } from 'enzyme';
import AddButton from '.';

const setup = () => {
  const props = {};

  const wrapper = shallow(<AddButton {...props} />);

  return {
    wrapper,
  };
};

describe('Icon', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.dive().type()).toBe('a');
  });
});
