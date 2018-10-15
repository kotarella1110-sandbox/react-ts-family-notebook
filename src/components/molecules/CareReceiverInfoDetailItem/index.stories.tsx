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
      <CareReceiverInfoDetailItem
        folderContent={{
          id: 'c430c8ef-868f-4189-9e53-c64151882e40',
          folderId: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
          title: 'Title',
          content: 'Content',
        }}
        toggleFolderContentModal={action('toggleFolderContentModal')}
      />
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
          id: 'c430c8ef-868f-4189-9e53-c64151882e40',
          folderId: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
          title: 'Title',
          content: 'Content',
        }}
        toggleFolderContentModal={action('toggleFolderContentModal')}
      />
    ))
  );
