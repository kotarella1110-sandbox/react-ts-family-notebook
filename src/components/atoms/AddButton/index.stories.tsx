import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import AddButton from '.';

storiesOf('Atoms/AddButton', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~jsx
      <AddButton>Text</AddButton>
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX('default', withNotes(``)(() => <AddButton>Text</AddButton>))
  .addWithJSX(
    'props onClick',
    withNotes(``)(() => <AddButton onClick={action('onClick')}>Text</AddButton>)
  );
