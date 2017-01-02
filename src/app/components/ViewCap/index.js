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

  setLogin(isLoggedIn){
    this.setState({loggedIn:isLoggedIn});
  }

  logIn(creds){
    let _this=this;
    console.log(_this);
    console.log(creds);
    axios.post('api/login', {
        domain:creds.domain,
        user: creds.user,
        pass: creds.pass
      })
      .then(function(response) {

        _this.setLogin(true);
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  render() {
    const { className, ...props } = this.props;
    console.log(this.state);
    return (
      <div className={classnames('LandView', className)} {...props}>
        <h1>
          Viewcap Models
        </h1>
        {
          (this.state.loggedIn) ? <ModelSelect/>
          : <LogInForm logIn={this.logIn}/>
        }

      </div>
    );
  }
}