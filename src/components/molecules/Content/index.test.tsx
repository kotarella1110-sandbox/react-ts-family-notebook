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

describe('Content', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.dive().type()).toBe('div');

    const Contents = wrapper.find('Contents');
    expect(Contents.dive().type()).toBe('div');
    expect(Contents.dive().contains('Content')).toBeTruthy();

    const Text = wrapper.find('Text');
    expect(Text.exists()).toBeFalsy();
  });

  it('props.text を渡した際に Text コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup({ text: 'Text' });
    const Text = wrapper.find('Text');
    expect(Text.dive().type()).toBe('p');
    expect(Text.dive().contains('Text')).toBeTruthy();
  });
});
