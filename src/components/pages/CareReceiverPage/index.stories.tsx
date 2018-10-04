import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { stub } from 'react-stubber';
import mockStore from 'store/mock';
import CareReceiverPage from '.';
import CareReceiverInfoItemContainer, {
  OwnProps,
} from 'containers/CareReceiverInfoItem';
import CareReceiverInfoItem from 'components/molecules/CareReceiverInfoItem';

stub(CareReceiverInfoItemContainer, ({ folderId }: OwnProps) => (
  <CareReceiverInfoItem folder={mockStore.entities.folders[folderId]} />
));

storiesOf('Pages/CareReceiverPage', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~jsx
      <CareReceiverPage
        careReceiver={{
          id: 0,
          name: '左藤太郎',
          birth: '76歳 1941年1月15日生',
          folders: [0, 1],
        }}
        fetchCareReceivers={action('fetchCareReceivers')}
        addFolder={action('addFolder')}
      />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => (
      <CareReceiverPage
        careReceiver={{
          id: 0,
          name: '左藤太郎',
          birth: '76歳 1941年1月15日生',
          folders: [0, 1],
        }}
        fetchCareReceivers={action('fetchCareReceivers')}
        addFolder={action('addFolder')}
      />
    ))
  );
