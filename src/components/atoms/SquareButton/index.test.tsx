import * as React from 'react';
import { shallow } from 'enzyme';
import SquareButton from '.';
import Button from 'components/atoms/Button';

const setup = () => shallow(<SquareButton />);

describe('SquareButton', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const wrapper = setup();
    expect(wrapper.type()).toBe(Button);
  });
});
