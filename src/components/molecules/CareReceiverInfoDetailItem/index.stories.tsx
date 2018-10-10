import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import CareReceiverInfoDetailItem from '.';

storiesOf('Molecules/CareReceiverInfoDetailItem', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~js
      <CareReceiverInfoDetailItem folder={{ id: 0, name: 'Title' }} />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => (
      <CareReceiverInfoDetailItem
        folderContent={{
          id: 0,
          folderId: 0,
          title: 'Title',
          content: 'Content',
        }}
        toggleFolderContentModal={action('toggleFolderContentModal')}
      />
    ))
  );
