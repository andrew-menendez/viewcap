import React, { Component } from 'react';
import { AppBar, Checkbox, IconButton } from 'react-toolbox';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import LBSidePanel from '../LBSidePanel';
import LBSummary from '../LBSummary';
import Comparables from '../Comparables';
import GraphPlayground from '../GraphPlayground';
// import ViewCap from '../ViewCap';
//all sidepanel things...
import axios from 'axios';
import MiniLogInForm from '../MiniLogInForm';
import { Button } from 'react-toolbox/lib/button';
import { Link } from 'react-router';
import Navigation from 'react-toolbox/lib/navigation';

// at some point you should move out the right sidepanel into a component...

export default class LandbankLayout extends Component {

    constructor(props) {
        super(props);

        this.state = {
                drawerActive: false,
                drawerPinned: true,
                sidebarPinned: false,
                activeTab: 'summary',
                reAuthVisible:false
            }
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.closeFunc = this.closeFunc.bind(this);
        this.tabControl = this.tabControl.bind(this);
        this.tabSet = this.tabSet.bind(this);
        this.logIn = this.logIn.bind(this);
        this.showReAuth=this.showReAuth.bind(this);
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
    this.setState({mql: mql, drawerPinned: mql.matches});
    // mql.addListener(this.mediaQueryChanged());
    mql.onchange=this.mediaQueryChanged;

  }

  componentWillUnmount= () => {
    this.state.mql.onchange=null;
  }

  mediaQueryChanged= ()=> {

    this.setState({drawerPinned: this.state.mql.matches});
  }

  closeFunc= ()=> {

    this.setState({
        drawerPinned:false,
        drawerActive: false
    })
  }

  pinFunc= ()=> {
    this.setState({
        drawerPinned:true,
        drawerActive: false
    })
  }

  tabSet=(tab)=>{
    this.setState({
        activeTab:tab
    })
  }

  tabControl = () => {

    const tabObj= {
        'summary':<LBSummary/>,
        'jpp':<p> other jpp here </p>,
        'comparables':<Comparables panelClose={this.closeFunc}/>,
        'simple_residual':<p> simple_residual </p>,
        'quarterly':<p> quarterly </p>,
        'monthly':<p> monthly </p>,
        'graphs':<GraphPlayground/>
        }

    return tabObj[this.state.activeTab]
  }

  logIn(creds){
    let _this=this;

    axios.post('api/login', {
        domain:creds.domain,
        user: creds.user,
        pass: creds.pass
      })
      .then(()=>{this.setState({reAuthVisible:false})})
      .then(()=>{this.toggleSidebar()})
      .catch(function (error) {
        console.error(error);
      });
  }
  showReAuth(){
    let isVisible= this.state.reAuthVisible;
    this.setState({reAuthVisible:!isVisible})
  }

    render() {
        let style={
            minHeight:'600px'
        }
        const { reAuthVisible } = this.state;
        return (
            <Layout>
                <NavDrawer active={this.state.drawerActive}
                    pinned={this.state.drawerPinned} permanentAt='xxxl'
                    onOverlayClick={ this.toggleDrawerActive }>
                    <LBSidePanel closeFunc={this.closeFunc}
                                pinFunc={this.pinFunc}
                                pinned={this.state.drawerPinned}
                                tabSet={this.tabSet}
                                activeTab={this.state.activeTab}
                                />
                </NavDrawer>
                <Panel>

                        {
                            (this.state.drawerPinned) ? <AppBar title="Landbank Content" rightIcon='more_vert' onRightIconClick={ this.toggleSidebar }/>
                            : <AppBar title="Landbank Content" leftIcon='menu' onLeftIconClick={ this.toggleDrawerActive } rightIcon='more_vert' onRightIconClick={ this.toggleSidebar } />
                        }
                    <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
                        <div style={style}>
                            {this.tabControl()}
                        </div>
                    </div>

                </Panel>
                <Sidebar pinned={ this.state.sidebarPinned } width={ 5 }>
                    <div><IconButton icon='close' onClick={ this.toggleSidebar }/></div>
                    <div style={{ flex: 1 }}>
                        <p>Supplemental content goes here.</p>
                        <Navigation type='vertical'>
                            <Link to='/'>
                                <Button>Back</Button>
                            </Link>
                            <Button onClick={()=> this.showReAuth()}>sign in again?</Button>
                        </Navigation>
                        {(reAuthVisible) ? <MiniLogInForm logIn={this.logIn} colWidth={3}/>
                            : <span></span>
                        }

                    </div>
                </Sidebar>
            </Layout>
        );
    }
}

/* () => tabSet('jpp')

<div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
                        <h1>Main Content</h1>
                        <p>Main content goes here.</p>
                        <Checkbox label='Pin drawer' checked={this.state.drawerPinned} onChange={this.toggleDrawerPinned} />
                        <Checkbox label='Show sidebar' checked={this.state.sidebarPinned} onChange={this.toggleSidebar} />
                    </div>

*/

