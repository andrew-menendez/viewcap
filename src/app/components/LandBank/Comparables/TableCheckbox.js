import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Checkbox from 'react-toolbox/lib/checkbox';


export default class TableCheckbox extends Component {

  constructor(props) {
        super(props);
        this.state = {
          check: false,
          row:{},
          index:null,
          checkFunction:null
        }

        this.handleChange=this.handleChange.bind(this)
    }


  handleChange(checkFunction,row,index,value){

    console.log(value,row);

    row.checked=value;
    checkFunction(row,index,value)
  }

  componentDidUpdate(){
    // console.log(this.state)
    // const {checkFunction, row, index, value, check} =this.state
    // checkFunction(row,index,check);

  }


  render () {
    const { checkFunction, row, index } = this.props;
    return (
      <div>
        <Checkbox
          checked={row.checked}
          onChange={this.handleChange.bind(this,checkFunction,row, index)}
        />
      </div>
    );
  }
}
//this.handleChange.bind(this,'check1',checkFunction,row)
//checkFunction(row,index,value)