import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverInfoDetailList, { Props } from '.';

const setup = (propOverrides = {}) => {
  const props: Props = {
    folderContents: [
      {
        id: 'c430c8ef-868f-4189-9e53-c64151882e40',
        folderId: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
        title: 'アレルギー',
        content: 'カニ、エビ',
      },
      {
        id: '7145db67-df4d-4df2-9747-8ffbcf4dff68',
        folderId: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
        title: '病歴',
        content: '脳梗塞（２００８年９月）',
      },
    ],
    toggleFolderContentModal: jest.fn(),
    ...propOverrides,
  };

  const wrapper = shallow(<CareReceiverInfoDetailList {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('CareReceiverInfoDetailList', () => {
  it('コンポーネントがレンダリングされていること', () => {
    const { wrapper } = setup();
    expect(wrapper.dive().type()).toBe('ul');
  });

  it('LI、CareReceiverInfoDetailItem コンポーネントがレンダリングされていること', () => {
    const {
      props: { folderContents, toggleFolderContentModal },
      wrapper,
    } = setup();
    expect(wrapper.children().length).toBe(2);

    wrapper.children().forEach((LI, index) => {
      const CareReceiverInfoDetailItem = LI.find('CareReceiverInfoDetailItem');
      expect(LI.key()).toBe(folderContents[index].id);
      expect(CareReceiverInfoDetailItem.prop('folderContent')).toEqual(
        folderContents[index]
      );
      expect(CareReceiverInfoDetailItem.prop('toggleFolderContentModal')).toBe(
        toggleFolderContentModal
      );
    });
  });
});
