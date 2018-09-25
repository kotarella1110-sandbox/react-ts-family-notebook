import * as React from 'react';
import { shallow } from 'enzyme';
import Text from '.';

const setup = () => shallow(<Text />);

describe('Text', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const wrapper = setup();
    expect(wrapper.type()).toBe('input');
    expect(wrapper.prop('type')).toBe('text');
  });
});
