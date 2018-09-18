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
      <Item icon=<Icon icon="add" /> title="Title" />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => <Item icon={<Icon icon="add" />} title="Title" />)
  )
  .addWithJSX(
    'props text',
    withNotes(``)(() => (
      <Item icon={<Icon icon="add" />} title="Title" text="Text" />
    ))
  )
  .addWithJSX(
    'props right',
    withNotes(``)(() => (
      <Item icon={<Icon icon="add" />} title="Title" right={<p>Right</p>} />
    ))
  )
  .addWithJSX(
    'props onClick',
    withNotes(``)(() => (
      <Item
        icon={<Icon icon="add" />}
        title="Title"
        onClick={action('onClick')}
      />
    ))
  )
  .addWithJSX(
    'props text and right is ArrowButton',
    withNotes(``)(() => (
      <Item
        icon={<Icon icon="add" />}
        title="Title"
        text="Text"
        right={<ArrowButton />}
      />
    ))
  )
  .addWithJSX(
    'props text and right is ArrowButton and onClick',
    withNotes(``)(() => (
      <Item
        icon={<Icon icon="add" />}
        title="Title"
        text="Text"
        right={<ArrowButton />}
        onClick={action('onClick')}
      />
    ))
  );
