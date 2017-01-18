import React, { Component, PropTypes } from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';
import Lock from 'react-icons/lib/fa/lock';
import { Button } from 'react-toolbox/lib/button';
import FaLineChart from 'react-icons/lib/fa/line-chart';
import FaTable from 'react-icons/lib/fa/table';
import FaCalendar from 'react-icons/lib/fa/calendar';
import FaCalendarPlusO from 'react-icons/lib/fa/calendar-plus-o';

export default class SidePanel extends Component {

  render(){
    const { closeFunc, pinFunc, pinned, tabSet, activeTab } = this.props;


    return (
  <div>
  {
    (pinned) ? <AppBar rightIcon='close'  onRightIconClick={ closeFunc }> LB MenuX </AppBar>
    : <AppBar  leftIcon={<Lock/>} rightIcon='close'  onRightIconClick={ closeFunc } onLeftIconClick={ pinFunc }> LB Menu </AppBar>
  }

    <Navigation type='vertical'>
      <Link label='Summary'
            icon={<FaTable/>}
            onClick={ () => tabSet('summary')}
            active={(activeTab==='summary') ? true : false }/>
      <Link label='JPP'
            icon={<FaLineChart/>}
            onClick={ () => tabSet('jpp')}
            active={(activeTab==='jpp') ? true : false }/>
      <Link label='Comparables'
            icon={<FaTable/>}
            onClick={ () => tabSet('comparables')}
            active={(activeTab==='comparables') ? true : false }/>
      <Link label='Simple Residual'
            icon='inbox'
            onClick={ () => tabSet('simple_residual')}
            active={(activeTab==='simple_residual') ? true : false }/>
      <Link label='Quarterly'
            icon={<FaCalendarPlusO/>}
            onClick={ () => tabSet('quarterly')}
            active={(activeTab==='quarterly') ? true : false }/>
      <Link label='Monthly'
            icon={<FaCalendar/>}
            onClick={ () => tabSet('monthly')}
            active={(activeTab==='monthly') ? true : false }/>

    </Navigation>
  </div>
    );
 }

}
