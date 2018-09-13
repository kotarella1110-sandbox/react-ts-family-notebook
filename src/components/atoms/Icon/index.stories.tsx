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
      <Icon icon="svg" />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX('add', withNotes(``)(() => <Icon icon="add" />))
  .addWithJSX('arrow', withNotes(``)(() => <Icon icon="arrow" />))
  .addWithJSX('carereceiver', withNotes(``)(() => <Icon icon="carereceiver" />))
  .addWithJSX(
    'carereceiver-info',
    withNotes(``)(() => <Icon icon="carereceiver-info" />)
  )
  .addWithJSX(
    'carereceiver-info-detail',
    withNotes(``)(() => <Icon icon="carereceiver-info-detail" />)
  );
