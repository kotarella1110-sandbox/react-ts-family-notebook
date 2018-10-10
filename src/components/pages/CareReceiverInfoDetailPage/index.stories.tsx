import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { stub } from 'react-stubber';
import mockStore from 'store/mock';
import CareReceiverInfoDetailPage from '.';
import CareReceiverInfoItemContainer, {
  OwnProps,
} from 'containers/CareReceiverInfoItem';
import CareReceiverInfoItem from 'components/molecules/CareReceiverInfoItem';

stub(CareReceiverInfoItemContainer, ({ folderId }: OwnProps) => (
  <CareReceiverInfoItem folder={mockStore.entities.folders[folderId]} />
));

storiesOf('Pages/CareReceiverInfoDetailPage', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~jsx
      <CareReceiverInfoDetailPage
        careReceiver={{
          id: 0,
          name: '左藤太郎',
          birth: '76歳 1941年1月15日生',
          folders: [0, 1],
        }}
        folder={{
          id: 0,
          careReceiverId: 0,
          name: '病歴やアレルギーなど',
          contents: [0, 1],
        }}
        fetchCareReceivers={action('fetchCareReceivers')}
        editFolder={action('editFolder')}
        deleteFolder={action('deleteFolder')}
        addFolderContent={action('addFolderContent')}
      />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => (
      <CareReceiverInfoDetailPage
        careReceiver={{
          id: 0,
          name: '左藤太郎',
          birth: '76歳 1941年1月15日生',
          folders: [0, 1],
        }}
        folder={{
          id: 0,
          careReceiverId: 0,
          name: '病歴やアレルギーなど',
          contents: [0, 1],
        }}
        fetchCareReceivers={action('fetchCareReceivers')}
        editFolder={action('editFolder')}
        deleteFolder={action('deleteFolder')}
        addFolderContent={action('addFolderContent')}
        editFolderContent={action('editFolderContent')}
        deleteFolderContent={action('deleteFolderContent')}
      />
    ))
  );
