import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverInfoDetailItem, { Props } from '.';
import Item from '../Item';

const setup = (propOverrides = {}) => {
  const props: Props = {
    folderContent: {
      id: 'c430c8ef-868f-4189-9e53-c64151882e40',
      folderId: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
      title: 'Title',
      content: 'Content',
    },
    toggleFolderContentModal: jest.fn(),
    ...propOverrides,
  };

  const wrapper = shallow(<CareReceiverInfoDetailItem {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('CareReceiverInfoDetailItem', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const {
      props: { folderContent },
      wrapper,
    } = setup();
    expect(wrapper.dive().type()).toBe('div');

    expect(wrapper.find('Item').type()).toBe(Item);

    const Title = wrapper.find('Title');
    expect(Title.dive().type()).toBe('h4');
    expect(Title.dive().text()).toBe(folderContent.title);
  });

  it('Item コンポーネントの click で props.onClick が呼ばれること', () => {
    // const {
    //   props: { toggleFolderContentModal },
    //   wrapper,
    // } = setup({ onClick: jest.fn() });
    // wrapper
    //   .find('a')
    //   .props()
    //   .onClick();
    // expect(toggleFolderContentModal).toHaveBeenCalledTimes(1);
  });
});
