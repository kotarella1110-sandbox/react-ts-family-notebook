import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { stub } from 'react-stubber';
import mockStore from 'store/mock';
import CareReceiverInfoDetailList from '.';
import CareReceiverInfoDetailItemContainer, {
  OwnProps,
} from 'containers/CareReceiverInfoDetailItem';
import CareReceiverInfoDetailItem from 'components/molecules/CareReceiverInfoDetailItem';

stub(CareReceiverInfoDetailItemContainer, ({ folderContentId }: OwnProps) => (
  <CareReceiverInfoDetailItem
    folderContent={mockStore.entities.folderContents[folderContentId]}
    // tslint:disable-next-line:jsx-no-lambda
    toggleFolderContentModal={() => null}
  />
));

storiesOf('Organisms/CareReceiverInfoDetailList', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~js
      <CareReceiverInfoDetailList
        folderContentIds={[
          'c430c8ef-868f-4189-9e53-c64151882e40',
          '7145db67-df4d-4df2-9747-8ffbcf4dff68',
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
        folderContentIds={[
          'c430c8ef-868f-4189-9e53-c64151882e40',
          '7145db67-df4d-4df2-9747-8ffbcf4dff68',
        ]}
        toggleFolderContentModal={action('toggleFolderContentModal')}
      />
    ))
  );
