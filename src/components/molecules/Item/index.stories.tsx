import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import Item from '.';
import Icon from '../../atoms/Icon';
import ArrowButton from '../../atoms/ArrowButton';

storiesOf('Molecules/Item', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~js
      <Item icon={<Icon icon="add" />}>Item</Item>
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => <Item icon={<Icon icon="add" />}>Item</Item>)
  )
  .addWithJSX(
    'props right',
    withNotes(``)(() => (
      <Item icon={<Icon icon="add" />} right={<p>Right</p>}>
        Item
      </Item>
    ))
  )
  .addWithJSX(
    'props onClick',
    withNotes(``)(() => (
      <Item icon={<Icon icon="add" />} onClick={action('onClick')}>
        Item
      </Item>
    ))
  )
  .addWithJSX(
    'props right is ArrowButton and onClick',
    withNotes(``)(() => (
      <Item
        icon={<Icon icon="add" />}
        right={<ArrowButton />}
        onClick={action('onClick')}>
        Item
      </Item>
    ))
  );
