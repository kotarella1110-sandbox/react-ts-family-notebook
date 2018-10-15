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
          id: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
          name: '左藤太郎',
          birth: '76歳 1941年1月15日生',
          folders: [
            'c430c8ef-868f-4189-9e53-c64151882e40',
            '71f24b4d-8816-4563-8526-a257f0bed1a2',
          ],
        }}
        folder={{
          id: 'c430c8ef-868f-4189-9e53-c64151882e40',
          careReceiverId: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
          name: '病歴やアレルギーなど',
          contents: [
            'c430c8ef-868f-4189-9e53-c64151882e40',
            '7145db67-df4d-4df2-9747-8ffbcf4dff68',
          ],
        }}
        editFolder={action('editFolder')}
        deleteFolder={action('deleteFolder')}
        addFolderContent={action('addFolderContent')}
        editFolderContent={action('editFolderContent')}
        deleteFolderContent={action('deleteFolderContent')}
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
          id: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
          name: '左藤太郎',
          birth: '76歳 1941年1月15日生',
          folders: [
            'c430c8ef-868f-4189-9e53-c64151882e40',
            '71f24b4d-8816-4563-8526-a257f0bed1a2',
          ],
        }}
        folder={{
          id: 'c430c8ef-868f-4189-9e53-c64151882e40',
          careReceiverId: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
          name: '病歴やアレルギーなど',
          contents: [
            'c430c8ef-868f-4189-9e53-c64151882e40',
            '7145db67-df4d-4df2-9747-8ffbcf4dff68',
          ],
        }}
        editFolder={action('editFolder')}
        deleteFolder={action('deleteFolder')}
        addFolderContent={action('addFolderContent')}
        editFolderContent={action('editFolderContent')}
        deleteFolderContent={action('deleteFolderContent')}
      />
    ))
  );
