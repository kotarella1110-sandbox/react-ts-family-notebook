import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import Icon from '.';

storiesOf('Atoms/Icon', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~jsx
      <Icon name="svg" />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX('add', withNotes(``)(() => <Icon name="add" />))
  .addWithJSX('arrow', withNotes(``)(() => <Icon name="arrow" />))
  .addWithJSX(
    'exclamation',
    withNotes(``)(() => <Icon name="care-receiver-info-detail" />)
  )
  .addWithJSX(
    'care-receiver',
    withNotes(``)(() => <Icon name="care-receiver" />)
  )
  .addWithJSX(
    'care-receiver-info',
    withNotes(``)(() => <Icon name="care-receiver-info" />)
  )
  .addWithJSX(
    'care-receiver-info-detail',
    withNotes(``)(() => <Icon name="care-receiver-info-detail" />)
  );
