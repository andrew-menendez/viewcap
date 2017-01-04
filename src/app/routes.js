import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import App from './App';
import LandbankLayout from './components/LandBank/LandbankLayout' ;
import  { Whoops404  } from './components' ;

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/landbank" component={LandbankLayout} />
        <Route path="*" component={Whoops404} />
    </Router>
)

export default routes