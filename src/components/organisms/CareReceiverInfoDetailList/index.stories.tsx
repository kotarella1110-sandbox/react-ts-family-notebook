import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import CareReceiverInfoDetailList from '.';

storiesOf('Organisms/CareReceiverInfoDetailList', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~js
      <CareReceiverInfoDetailList
        folderContents={[
          {
            id: 'c430c8ef-868f-4189-9e53-c64151882e40',
            folderId: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
            title: 'アレルギー',
            content: 'カニ、エビ',
          },
          {
            id: '7145db67-df4d-4df2-9747-8ffbcf4dff68',
            folderId: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
            title: '病歴',
            content: '脳梗塞（２００８年９月）',
          },
        ]}
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
      <CareReceiverInfoDetailList
        folderContents={[
          {
            id: 'c430c8ef-868f-4189-9e53-c64151882e40',
            folderId: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
            title: 'アレルギー',
            content: 'カニ、エビ',
          },
          {
            id: '7145db67-df4d-4df2-9747-8ffbcf4dff68',
            folderId: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
            title: '病歴',
            content: '脳梗塞（２００８年９月）',
          },
        ]}
        toggleFolderContentModal={action('toggleFolderContentModal')}
      />
    ))
  );
