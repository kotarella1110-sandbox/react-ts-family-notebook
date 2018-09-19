import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import CareReceiverItem from '.';

storiesOf('Molecules/CareReceiverItem', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~js
      <CareReceiverItem
        careReceiver={{
          id: 0,
          name: '左藤太郎',
          birth: '76歳 1941年1月15日生',
        }}
      />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => (
      <CareReceiverItem
        careReceiver={{
          id: 0,
          name: '左藤太郎',
          birth: '76歳 1941年1月15日生',
          folders: [],
        }}
      />
    ))
  );
