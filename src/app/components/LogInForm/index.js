import React, { PropTypes, Component } from 'react';
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import classnames from 'classnames';

// import './style.css';

export default class  LogInForm extends Component {

  //let _domain, _user, _pass ;
  constructor(props) {
    super(props);
    this.state = {
      domain: 'app',
      user:'',
      pass:''
    };

    this.handleChange = this.handleChange.bind(this);

  }

  // handleChange(field,event) {
  //     var nextState = {}
  //     nextState[field] = event.target.value
  //     this.setState(nextState)
  // }
  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  render(){
  const { className, logIn } = this.props;

  return (
    <Grid>
      <Row center="xs">
        <Col xs={8}>
        <form onSubmit={() =>logIn({
                                    domain:this.state.domain,
                                    user:this.state.user,
                                    pass:this.state.pass
                                  })}
              className="log-in-form">
        <h4>Please authenticate with your ModelShop credentials</h4>
          <section>

            <Input label='ModelShop Domain' name='domain' type="text" required  value={this.state.domain} onChange={this.handleChange.bind(this,'domain')}/>


            <Input label="Username" name="user" type="text" required  value={this.state.user} onChange={this.handleChange.bind(this,'user')}/>


            <Input label="Password" name="pass" type="text" required  value={this.state.pass} onChange={this.handleChange.bind(this,'pass')}/>
        </section>
        <Button onClick={() =>logIn({
                                    domain:this.state.domain,
                                    user:this.state.user,
                                    pass:this.state.pass
                                  })}>Log in</Button>
        </form>
      </Col>
      </Row>
    </Grid>
    );
  }

}

