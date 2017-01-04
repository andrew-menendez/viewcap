import React, { Component } from 'react';
import { AppBar, Checkbox, IconButton } from 'react-toolbox';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import LBSidePanel from '../LBSidePanel';
// import ViewCap from '../ViewCap';

export default class LandbankLayout extends Component {

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
        console.log(this.state)
    }

    toggleSidebar = () => {
        this.setState({ sidebarPinned: !this.state.sidebarPinned });
    }

    // makes sidepanel responsive
  componentWillMount= ()=> {
    var mql = window.matchMedia(`(min-width: 800px)`);
    console.log("mql is ", mql)
    console.log(this.state)
    this.setState({mql: mql, drawerPinned: mql.matches});
    // mql.addListener(this.mediaQueryChanged());
    mql.onchange=this.mediaQueryChanged;
    console.log(this.state);
  }

  componentWillUnmount= () => {
    this.state.mql.onchange=null;
  }

  mediaQueryChanged= ()=> {
    console.log("call me baby");
    console.log(this.state)
    this.setState({drawerPinned: this.state.mql.matches});
  }

  closeFunc= ()=> {
    console.log("clsing")
    this.setState({
        drawerPinned:false,
        drawerActive: false
    })
  }

  pinFunc= ()=> {
    console.log("pin")
    this.setState({
        drawerPinned:true,
        drawerActive: false
    })
  }

    render() {
        let style={
            height:'400px'
        }
        return (
            <Layout>
                <NavDrawer active={this.state.drawerActive}
                    pinned={this.state.drawerPinned} permanentAt='xxxl'
                    onOverlayClick={ this.toggleDrawerActive }>
                    <LBSidePanel closeFunc={this.closeFunc} pinFunc={this.pinFunc} pinned={this.state.drawerPinned}/>
                </NavDrawer>
                <Panel>
                    {
                        (this.state.drawerPinned) ? <AppBar title="Landbank Content"/>
                        : <AppBar title="Landbank Content" leftIcon='menu' onLeftIconClick={ this.toggleDrawerActive } />
                    }

                    <div style={style}>
                        <p> some stuff here </p>
                    </div>

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

