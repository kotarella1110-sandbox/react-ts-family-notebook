import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import Content from '.';
import Text from '../../atoms/Text';

storiesOf('Molecules/Content', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~js
      <Content label="Label" text="Text">
        Content
      </Content>
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => (
      <Content label="Label" text="Text">
        Content
      </Content>
    ))
  )
  .addWithJSX(
    'props children is Text',
    withNotes(``)(() => (
      <Content label="Label" text="Text">
        <Text />
      </Content>
    ))
  );
