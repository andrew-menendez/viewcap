import React, { Component, PropTypes } from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';
import FaLineChart from 'react-icons/lib/fa/line-chart';


export default class SidePanel extends Component {

  render(){
    const { closeFunc } = this.props;
    return (
  <div>
    <AppBar  rightIcon='close' onRightIconClick={ closeFunc }>
      Menu Panel
    </AppBar>
    <Navigation type='vertical'>
      <Link href='http://' label='Inbox' icon='inbox' />
      <Link href='http://' label='Profile' icon='person' />
      <Link href='http://' active label='Models' icon={<FaLineChart/>} />
    </Navigation>
  </div>
    );
 }

}
