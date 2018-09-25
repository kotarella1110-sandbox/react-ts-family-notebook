import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import ModalTemplate from '.';

storiesOf('Templates/ModalTemplate', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~jsx
      <ModalTemplate header="Header" isOpen={true}>
        Main
      </ModalTemplate>
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => (
      <ModalTemplate header="Header" isOpen={true}>
        Main
      </ModalTemplate>
    ))
  );
