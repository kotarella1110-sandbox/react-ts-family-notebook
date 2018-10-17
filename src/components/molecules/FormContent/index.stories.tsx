import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import FormContent from '.';
import Text from '../../atoms/Text';

storiesOf('Molecules/FormContent', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~js
      <FormContent label="Label" text="Text">
        FormContent
      </FormContent>
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => <FormContent label="Label">FormContent</FormContent>)
  )
  .addWithJSX(
    'props children is Text',
    withNotes(``)(() => (
      <FormContent label="Label">
        <Text />
      </FormContent>
    ))
  );
