import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Checkbox from 'react-toolbox/lib/checkbox';


export default class TableCheckbox extends Component {

  constructor(props) {
        super(props);
        this.state = { check1: false}

        // this.handleChange=this.handleChange.bind(this)
    }


  handleChange(field,checkFunction,row, value){
    console.log(checkFunction,row,value)
    //this.setState({...this.state, [field]: value});
    //checkFunction(row,index,value)
  }


  render () {
    const { checkFunction, row, index } = this.props;
    return (
      <div>
        <Checkbox
          checked={this.state.check1}

        />
      </div>
    );
  }
}
//this.handleChange.bind(this,'check1',checkFunction,row)