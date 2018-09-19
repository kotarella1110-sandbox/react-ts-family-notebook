import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverPage from '.';
import AppTemplate from '../../templates/AppTemplate';

const setup = () => {
  const props = {};

  const wrapper = shallow(<CareReceiverPage {...props} />);

  return { props, wrapper };
};

describe('CareReceiverPage', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.type()).toBe(AppTemplate);
  });
});
