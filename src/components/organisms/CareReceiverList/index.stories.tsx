import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { stub } from 'react-stubber';
import mockStore from 'store/mock';
import CareReceiverList from '.';
import CareReceiverInfoItemContainer, {
  OwnProps,
} from 'containers/CareReceiverInfoItem';
import CareReceiverInfoItem from 'components/molecules/CareReceiverInfoItem';

stub(CareReceiverInfoItemContainer, ({ folderId }: OwnProps) => (
  <CareReceiverInfoItem folder={mockStore.folders[folderId]} />
));

storiesOf('Organisms/CareReceiverList', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~js
      <CareReceiverList
        careReceivers={[
          {
            id: 0,
            name: '左藤太郎',
            birth: '76歳 1941年1月15日生',
            folders: [0, 1],
          },
          {
            id: 1,
            name: '左藤二郎',
            birth: '76歳 1941年2月13日生',
            folders: [2, 3],
          },
        ]}
      />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => (
      <CareReceiverList
        careReceivers={[
          {
            id: 0,
            name: '左藤太郎',
            birth: '76歳 1941年1月15日生',
            folders: [0, 1],
          },
          {
            id: 1,
            name: '左藤二郎',
            birth: '76歳 1941年2月13日生',
            folders: [2, 3],
          },
        ]}
      />
    ))
  );
