import * as React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

const setup = () => shallow(<Button />);

describe('Button', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const wrapper = setup();
    expect(wrapper.type()).toBe('button');
  });
});
