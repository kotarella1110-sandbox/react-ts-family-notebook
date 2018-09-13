import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import ArrowButton from '.';

storiesOf('Atoms/ArrowButton', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~jsx
      <ArrowButton />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX('default', withNotes(``)(() => <ArrowButton />))
  .addWithJSX(
    'props isPrimary is true',
    withNotes(``)(() => <ArrowButton isPrimary={true} />)
  )
  .addWithJSX(
    'props isRight is true',
    withNotes(``)(() => <ArrowButton isRight={true} />)
  )
  .addWithJSX(
    'props isPrimary is true and isRight is true',
    withNotes(``)(() => <ArrowButton isPrimary={true} isRight={true} />)
  );
