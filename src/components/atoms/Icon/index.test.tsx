import * as React from 'react';
import { shallow } from 'enzyme';
import Icon from '.';

const setup = () => {
  const props = {
    icon: 'add',
  };

  const wrapper = shallow(<Icon {...props} />);

  return {
    wrapper,
  };
};

describe('Icon', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.dive().type()).toBe('span');
  });
});
