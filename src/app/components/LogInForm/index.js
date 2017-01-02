import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

// import './style.css';

export const LogInForm = ({domain,user,pass,logIn}) => {

  let _domain, _user, _pass ;

  function handleSubmit(event) {

    event.preventDefault();
    logIn({
      domain:_domain.value,
      user:_user.value,
      pass:_pass.value
    })

  }

  return (

      <form onSubmit={handleSubmit} className="log-in-form">
      <h4>Please authenticate with your ModelShop credentials</h4>
        <label htmlFor="domain">ModelShop Domain </label>
        <input id="domain" type="text" required defaultValue={domain} ref={input => _domain = input}/>

        <label htmlFor="user">Username </label>
        <input id="user" type="text" required defaultValue={user} ref={input => _user = input}/>

        <label htmlFor="pass">Password </label>
        <input id="pass" type="text" required defaultValue={pass} ref={input => _pass = input}/>

      <button>Log in</button>
      </form>
    )
}

LogInForm.defaultProps = {
  domain: "app",
  user: "viewcap",
  pass: "",

}

LogInForm.propTypes = {
  domain: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired
}