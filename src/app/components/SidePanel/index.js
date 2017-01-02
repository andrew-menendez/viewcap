import React, { Component, PropTypes } from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';

const actions = [
  { label: 'Alarm', raised: true, icon: 'access_alarm'},
  { label: 'Location', raised: true, accent: true, icon: 'room'}
];

export default class SidePanel extends Component {

  render(){
    const { closeFunc } = this.props;
    return (
  <div>
    <AppBar  rightIcon='close' onRightIconClick={ closeFunc }>
      Menu Panel
    </AppBar>
    <Navigation type='vertical'actions={actions}>
      <Link href='http://' label='Inbox' icon='inbox' />
      <Link href='http://' active label='Profile' icon='person' />
    </Navigation>
  </div>
    );
 }

}
