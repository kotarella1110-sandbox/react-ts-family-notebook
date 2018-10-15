import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import CareReceiverInfoItem from '.';

storiesOf('Molecules/CareReceiverInfoItem', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~js
      <CareReceiverInfoItem
        folder={{
          id: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
          careReceiverId: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
          name: 'Title',
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
      <CareReceiverInfoItem
        folder={{
          id: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
          careReceiverId: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
          name: 'Title',
        }}
      />
    ))
  );
