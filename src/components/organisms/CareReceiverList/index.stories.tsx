import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import CareReceiverList from '.';

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
      />
    ))
  );
