import * as React from 'react';
import { shallow } from 'enzyme';
import Content, { Props } from '.';

const setup = (propOverrides = {}) => {
  const props: Props = {
    label: 'Label',
    children: 'Content',
    ...propOverrides,
  };

  const wrapper = shallow(<Content {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('FormContent', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.dive().type()).toBe('div');

    const Contents = wrapper.find('Content');
    expect(Contents.dive().type()).toBe('div');
    expect(Contents.dive().contains('Content')).toBeTruthy();
  });
});
