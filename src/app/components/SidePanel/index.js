import React, { PropTypes } from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';

const actions = [
  { label: 'Alarm', raised: true, icon: 'access_alarm'},
  { label: 'Location', raised: true, accent: true, icon: 'room'}
];

const NavigationTest = () => (
  <div>
    <AppBar leftIcon='menu'>
      Menu Panel
    </AppBar>
    <Navigation type='vertical'actions={actions}>
      <Link href='http://' label='Inbox' icon='inbox' />
      <Link href='http://' active label='Profile' icon='person' />
    </Navigation>
  </div>
);

export default NavigationTest;