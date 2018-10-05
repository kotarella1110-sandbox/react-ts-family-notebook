import * as React from 'react';
import { storiesOf } from '@storybook/react';
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
      <Item name={<Icon name="add" />}>Item</Item>
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => <Item icon={<Icon name="add" />}>Item</Item>)
  )
  .addWithJSX(
    'props right',
    withNotes(``)(() => (
      <Item icon={<Icon name="add" />} right={<p>Right</p>}>
        Item
      </Item>
    ))
  )
  .addWithJSX(
    'props right is ArrowButton',
    withNotes(``)(() => (
      <Item icon={<Icon name="add" />} right={<ArrowButton reverse={true} />}>
        Item
      </Item>
    ))
  );
