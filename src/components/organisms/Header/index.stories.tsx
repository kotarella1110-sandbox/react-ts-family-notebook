import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import Header from '.';

storiesOf('Organisms/Header', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~jsx
      <Header title="Title" Right={<div>Right</div>} />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => <Header right={<p>Right</p>} title="Title" />)
  )
  .addWithJSX(
    'props left',
    withNotes(``)(() => (
      <Header left={<p>Left</p>} right={<p>Right</p>} title="Title" />
    ))
  );
