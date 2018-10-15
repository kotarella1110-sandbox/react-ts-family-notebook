import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverInfoDetailList, { Props } from '.';

const setup = (propOverrides = {}) => {
  const props: Props = {
    folderContentIds: [
      'c430c8ef-868f-4189-9e53-c64151882e40',
      '7145db67-df4d-4df2-9747-8ffbcf4dff68',
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
      props: { folderContentIds, toggleFolderContentModal },
      wrapper,
    } = setup();
    expect(wrapper.children().length).toBe(2);

    wrapper.children().forEach((LI, index) => {
      const CareReceiverInfoDetailItem = LI.find(
        'Connect(CareReceiverInfoDetailItem)'
      );
      expect(LI.key()).toBe(folderContentIds[index]);
      expect(CareReceiverInfoDetailItem.prop('folderContentId')).toEqual(
        folderContentIds[index]
      );
      expect(CareReceiverInfoDetailItem.prop('toggleFolderContentModal')).toBe(
        toggleFolderContentModal
      );
    });
  });
});
