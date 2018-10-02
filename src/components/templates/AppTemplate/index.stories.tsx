import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import AppTemplate from '.';
import Header from '../../organisms/Header';
import AddButton from '../../atoms/AddButton';
import { stub } from 'react-stubber';
import mockStore from 'store/mock';
import CareReceiverInfoList from '../../organisms/CareReceiverInfoList';
import CareReceiverInfoItemContainer, {
  OwnProps,
} from 'containers/CareReceiverInfoItem';
import CareReceiverInfoItem from 'components/molecules/CareReceiverInfoItem';

stub(CareReceiverInfoItemContainer, ({ folderId }: OwnProps) => (
  <CareReceiverInfoItem folder={mockStore.folders[folderId]} />
));

storiesOf('Templates/AppTemplate', module)
  .addDecorator((story, context) =>
    withInfo(`
      ~~~jsx
      <AppTemplate header="Header">Main<AppTemplate/>
      ~~~
    `)(story)(context)
  )
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addWithJSX(
    'default',
    withNotes(``)(() => <AppTemplate header="Header">Main</AppTemplate>)
  )
  .addWithJSX(
    'props header is Header and main is CareReceiverInfoList',
    withNotes(``)(() => (
      <AppTemplate
        header={
          <Header
            right={<AddButton onClick={action('onClick')}>追加</AddButton>}
            title="Title"
          />
        }>
        <CareReceiverInfoList folderIds={[0, 1]} onClick={action('onClick')} />
      </AppTemplate>
    ))
  );
