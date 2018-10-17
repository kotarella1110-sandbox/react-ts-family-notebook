import * as React from 'react';
import { shallow } from 'enzyme';
import TextArea from '.';

const setup = () => shallow(<TextArea />);

describe('TextArea', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const wrapper = setup();
    expect(wrapper.type()).toBe('textarea');
  });
});
