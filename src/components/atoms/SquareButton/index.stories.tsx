import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import SquareButton from '.';

storiesOf('Atoms/SquareButton', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~jsx
      <SquareButton>SquareButton</SquareButton>
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => <SquareButton>SquareButton</SquareButton>)
  )
  .addWithJSX(
    'props onClick',
    withNotes(``)(() => (
      <SquareButton onClick={action('Click')}>SquareButton</SquareButton>
    ))
  );
