import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverInfoList, { Props } from '.';

const setup = (propOverrides = {}) => {
  const props: Props = {
    folders: [{ id: 0, title: 'Title1' }, { id: 1, title: 'Title2' }],
    ...propOverrides,
  };

  const wrapper = shallow(<CareReceiverInfoList {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('CareReceiverInfoList', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.dive().type()).toBe('ul');
  });

  it('CareReceiverInfoItem コンポーネントがレンダリングされていること', () => {
    const {
      props: { folders },
      wrapper,
    } = setup();
    expect(wrapper.children().length).toBe(2);

    wrapper.children().forEach((CareReceiverInfoItem, index) => {
      expect(Number(CareReceiverInfoItem.key())).toBe(folders[index].id);
      expect(CareReceiverInfoItem.prop('title')).toBe(folders[index].title);
    });
  });

  it('CareReceiverInfoItem コンポーネントがレンダリングされていること', () => {
    const {
      props: { folders, onClick },
      wrapper,
    } = setup({ onClick: jest.fn() });
    expect(wrapper.children().length).toBe(2);

    wrapper.children().forEach((CareReceiverInfoItem, index) => {
      expect(Number(CareReceiverInfoItem.key())).toBe(folders[index].id);
      expect(CareReceiverInfoItem.prop('title')).toBe(folders[index].title);
      expect(CareReceiverInfoItem.prop('onClick')).toBe(onClick);
    });
  });
});
