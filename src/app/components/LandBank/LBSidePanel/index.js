import React, { Component, PropTypes } from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';
import Lock from 'react-icons/lib/fa/lock';

const actions = [
  { label: 'Alarm', raised: true, icon: 'access_alarm'},
  { label: 'Location', raised: true, accent: true, icon: 'room'}
];

export default class SidePanel extends Component {

  render(){
    const { closeFunc, pinFunc, pinned } = this.props;
    return (
  <div>
  {
    (pinned) ? <AppBar rightIcon='close'  onRightIconClick={ closeFunc }> LB Menu </AppBar>
    : <AppBar  leftIcon={<Lock/>} rightIcon='close'  onRightIconClick={ closeFunc } onLeftIconClick={ pinFunc }> LB Menu </AppBar>
  }

    <Navigation type='vertical'actions={actions}>
      <Link href='http://' label='Inbox' icon='inbox' />
      <Link href='http://' active label='Profile' icon='person' />
    </Navigation>
  </div>
    );
 }

}
