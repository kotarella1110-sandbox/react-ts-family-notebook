import * as React from 'react';
import AppTemplate from '../../templates/AppTemplate';
import AddButton from '../../atoms/AddButton';
import Header from '../../organisms/Header';
import CareReceiverList from '../../organisms/CareReceiverList';

export interface Props {}

const CareReceiverPage: React.SFC<Props> = () => (
  <AppTemplate
    header={<Header right={<AddButton>追加</AddButton>} title="本人情報" />}>
    <CareReceiverList
      careReceivers={[
        {
          id: 0,
          name: '左藤太郎',
          birth: '76歳 1941年1月15日生',
          folders: [{ id: 0, name: 'Title1' }, { id: 1, name: 'Title2' }],
        },
        {
          id: 1,
          name: '左藤二郎',
          birth: '76歳 1941年2月13日生',
          folders: [{ id: 0, name: 'Title1' }, { id: 1, name: 'Title2' }],
        },
      ]}
    />
  </AppTemplate>
);

export default CareReceiverPage;
