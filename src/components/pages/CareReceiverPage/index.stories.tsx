import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import CareReceiverPage from '.';

storiesOf('Pages/CareReceiverPage', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~jsx
      <CareReceiverPage
        careReceivers={[
          {
            id: 0,
            name: '左藤太郎',
            birth: '76歳 1941年1月15日生',
            folders: [
              { id: 0, careReceiverId: 0, name: 'Title1' },
              { id: 1, careReceiverId: 0, name: 'Title2' },
            ],
          },
          {
            id: 1,
            name: '左藤二郎',
            birth: '76歳 1941年2月13日生',
            folders: [
              { id: 0, careReceiverId: 1, name: 'Title1' },
              { id: 1, careReceiverId: 1, name: 'Title2' },
            ],
          },
        ]}
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
        careReceivers={[
          {
            id: 0,
            name: '左藤太郎',
            birth: '76歳 1941年1月15日生',
            folders: [
              { id: 0, careReceiverId: 0, name: 'Title1' },
              { id: 1, careReceiverId: 0, name: 'Title2' },
            ],
          },
          {
            id: 1,
            name: '左藤二郎',
            birth: '76歳 1941年2月13日生',
            folders: [
              { id: 0, careReceiverId: 1, name: 'Title1' },
              { id: 1, careReceiverId: 1, name: 'Title2' },
            ],
          },
        ]}
        fetchCareReceivers={action('fetchCareReceivers')}
        addFolder={action('addFolder')}
      />
    ))
  );
