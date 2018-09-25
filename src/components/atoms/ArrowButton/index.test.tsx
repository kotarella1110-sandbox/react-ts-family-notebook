import * as React from 'react';
import { shallow } from 'enzyme';
import ArrowButton from '.';
import Button from 'components/atoms/Button';

const setup = () => {
  const props = {};

  const wrapper = shallow(<ArrowButton {...props} />);

  return {
    wrapper,
  };
};

describe('ArrowButton', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.dive().type()).toBe(Button);
  });
});
