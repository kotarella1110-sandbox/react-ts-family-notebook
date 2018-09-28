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
import CareReceiverInfoList from '../../organisms/CareReceiverInfoList';

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
        <CareReceiverInfoList
          folders={[
            { id: 0, careReceiverId: 0, name: 'Title1' },
            { id: 1, careReceiverId: 0, name: 'Title2' },
          ]}
          onClick={action('onClick')}
        />
      </AppTemplate>
    ))
  );
