import * as React from 'react';
import { shallow } from 'enzyme';
import AddButton from '.';
import Button from 'components/atoms/Button';

const setup = () => {
  const props = {};

  const wrapper = shallow(<AddButton {...props} />);

  return {
    wrapper,
  };
};

describe('AddButton', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.dive().type()).toBe(Button);
  });
});
