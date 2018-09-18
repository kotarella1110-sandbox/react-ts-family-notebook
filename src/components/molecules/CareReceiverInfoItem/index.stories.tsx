import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import CareReceiverInfoItem from '.';

storiesOf('Molecules/CareReceiverInfoItem', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~js
      <CareReceiverItem title="Title" />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => <CareReceiverInfoItem title="Title" />)
  )
  .addWithJSX(
    'props onClick',
    withNotes(``)(() => (
      <CareReceiverInfoItem title="Title" onClick={action('onClick')} />
    ))
  );
