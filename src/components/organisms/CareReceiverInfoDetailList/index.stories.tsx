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
  />
));

storiesOf('Organisms/CareReceiverInfoDetailList', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~js
      <CareReceiverInfoDetailList folderContentIds={[0, 1]} />
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => (
      <CareReceiverInfoDetailList folderContentIds={[0, 1]} />
    ))
  )
  .addWithJSX(
    'props onClick',
    withNotes(``)(() => (
      <CareReceiverInfoDetailList
        folderContentIds={[0, 1]}
        onClick={action('onClick')}
      />
    ))
  );
