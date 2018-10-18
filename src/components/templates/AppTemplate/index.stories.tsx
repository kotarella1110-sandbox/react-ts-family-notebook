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
          careReceiverId="8e3900e8-58a3-45d9-92e5-10d894016bd7"
          folders={[
            {
              id: 'a0d45fb9-ea6d-48df-af7b-9f5af2329f39',
              careReceiverId: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
              name: '病歴やアレルギーなど',
            },
            {
              id: '71f24b4d-8816-4563-8526-a257f0bed1a2',
              careReceiverId: '8e3900e8-58a3-45d9-92e5-10d894016bd7',
              name: 'お薬情報',
            },
          ]}
        />
      </AppTemplate>
    ))
  );
