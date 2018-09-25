import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import Button from '.';

storiesOf('Atoms/Button', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~jsx
      <Button>Button</Button>
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX('default', withNotes(``)(() => <Button>Button</Button>))
  .addWithJSX(
    'props onClick',
    withNotes(``)(() => <Button onClick={action('Click')}>Button</Button>)
  );
