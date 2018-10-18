import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import CareReceiverInfoList from '.';

storiesOf('Organisms/CareReceiverInfoList', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~js
      <CareReceiverInfoList
        careReceiverId="8e3900e8-58a3-45d9-92e5-10d894016bd7"
        folders={[
          {
            id: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
            careReceiverId: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
            name: '病歴やアレルギーなど',
          },
          {
            id: '71f24b4d-8816-4563-8526-a257f0bed1a2',
            careReceiverId: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
            name: 'お薬情報',
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
      <CareReceiverInfoList
        careReceiverId="8e3900e8-58a3-45d9-92e5-10d894016bd7"
        folders={[
          {
            id: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
            careReceiverId: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
            name: '病歴やアレルギーなど',
          },
          {
            id: '71f24b4d-8816-4563-8526-a257f0bed1a2',
            careReceiverId: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
            name: 'お薬情報',
          },
        ]}
      />
    ))
  );
