import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
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
        folders={[{ id: 0, title: 'Title1' }, { id: 1, title: 'Title2' }]}
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
        folders={[{ id: 0, title: 'Title1' }, { id: 1, title: 'Title2' }]}
      />
    ))
  )
  .addWithJSX(
    'props onClick',
    withNotes(``)(() => (
      <CareReceiverInfoList
        folders={[{ id: 0, title: 'Title1' }, { id: 1, title: 'Title2' }]}
        onClick={action('onClick')}
      />
    ))
  );
