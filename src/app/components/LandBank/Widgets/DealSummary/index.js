import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';

const labelStyle={
  marginTop:'30px',
  marginLeft:'20px'

}

export default class DealSummary extends Component {

  constructor(props) {
        super(props);
        this.state = {
              totalcost:11250000,
              numberOfProjects:1,
              grossCost:11250000,
              dilligenceCosts:25000
              }

      //this.fetchData=this.fetchData.bind(this)
      this.handleChange = this.handleChange.bind(this);
    }

  handleChange(name, value){
    this.setState({...this.state, [name]: value});
  };

  render(){
    const { className, data, params } = this.props;


    return (
          <div className={classnames('DealSummary', className)}>





          </div>
        )
    }

}