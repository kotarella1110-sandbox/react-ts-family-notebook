import * as React from 'react';
import { shallow } from 'enzyme';
import CareReceiverInfoDetailList, { Props } from '.';

const setup = (propOverrides = {}) => {
  const props: Props = {
    folderContentIds: [0, 1],
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
      expect(Number(LI.key())).toBe(folderContentIds[index]);
      expect(CareReceiverInfoDetailItem.prop('folderContentId')).toEqual(
        folderContentIds[index]
      );
      expect(CareReceiverInfoDetailItem.prop('toggleFolderContentModal')).toBe(
        toggleFolderContentModal
      );
    });
  });
});
