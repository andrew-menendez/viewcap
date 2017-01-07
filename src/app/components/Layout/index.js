import React, { Component } from 'react';
import { AppBar, Checkbox, IconButton } from 'react-toolbox';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import SidePanel from '../SidePanel';
import ViewCap from '../ViewCap';

export default class SampleLayout extends Component {

    constructor(props) {
        super(props);

        this.state = {
                drawerActive: false,
                drawerPinned: true,
                sidebarPinned: false
            }
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.closeFunc = this.closeFunc.bind(this);
    }

    toggleDrawerActive = () => {
        this.setState({ drawerActive: !this.state.drawerActive });
    }

    toggleDrawerPinned = () => {
        this.setState({ drawerPinned: !this.state.drawerPinned });

    }

    toggleSidebar = () => {
        this.setState({ sidebarPinned: !this.state.sidebarPinned });
    }

    // makes sidepanel responsive
  componentWillMount= ()=> {
    var mql = window.matchMedia(`(min-width: 800px)`);

    this.setState({mql: mql, drawerPinned: mql.matches});
    // mql.addListener(this.mediaQueryChanged());
    mql.onchange=this.mediaQueryChanged;

  }

  componentWillUnmount= () => {
    this.state.mql.onchange=null;
  }

  mediaQueryChanged= ()=> {

    console.log(this.state)
    this.setState({drawerPinned: this.state.mql.matches});
  }

  closeFunc= ()=> {

    this.setState({
        drawerPinned:false,
        drawerActive: false
    })
  }

    render() {
        return (
            <Layout>
                <NavDrawer active={this.state.drawerActive}
                    pinned={this.state.drawerPinned} permanentAt='xxxl'
                    onOverlayClick={ this.toggleDrawerActive }>
                    <SidePanel closeFunc={this.closeFunc}/>
                </NavDrawer>
                <Panel>
                    <AppBar title="ViewCap Content" leftIcon='menu' onLeftIconClick={ this.toggleDrawerActive } />

                    <ViewCap/>

                </Panel>
                <Sidebar pinned={ this.state.sidebarPinned } width={ 5 }>
                    <div><IconButton icon='close' onClick={ this.toggleSidebar }/></div>
                    <div style={{ flex: 1 }}>
                        <p>Supplemental content goes here.</p>
                    </div>
                </Sidebar>
            </Layout>
        );
    }
}

/*

<div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
                        <h1>Main Content</h1>
                        <p>Main content goes here.</p>
                        <Checkbox label='Pin drawer' checked={this.state.drawerPinned} onChange={this.toggleDrawerPinned} />
                        <Checkbox label='Show sidebar' checked={this.state.sidebarPinned} onChange={this.toggleSidebar} />
                    </div>

*/

