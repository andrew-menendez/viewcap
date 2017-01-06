import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';

import { LogInForm } from '../LogInForm';
import ModelSelect from '../ModelSelect';


// import './style.css';

export default class ViewCap extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor(props){
    super(props)
    this.state={
      loggedIn:false
      }

    this.logIn = this.logIn.bind(this);
  }

  componentDidMount(){
    let loggedIn=JSON.parse(sessionStorage.getItem('loggedIn'));
    console.log(loggedIn)
    this.setState({loggedIn:loggedIn})
  }

  setLogin(isLoggedIn){
    this.setState({loggedIn:isLoggedIn});
  }

  logIn(creds){
    let _this=this;

    axios.post('api/login', {
        domain:creds.domain,
        user: creds.user,
        pass: creds.pass
      })
      .then(function(response) {

        _this.setLogin(true);

        console.log(_this.state);
        sessionStorage.setItem('loggedIn', true);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  render() {
    const { className, ...props } = this.props;
    console.log(this.state);
    const {loggedIn} = this.state;
    var style={
          'minHeight': '400px'
        }
    return (
      <div className={classnames('ViewCap', className)} {...props}>
      <div className="dash" style={style}>
          <h1>
            Viewcap Models
          </h1>
          {
            (loggedIn) ? <ModelSelect user="viewcap"/>
            : <LogInForm logIn={this.logIn}/>
          }
        </div>
      </div>
    );
  }
}