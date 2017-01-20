import React, { PropTypes, Component } from 'react';
// import classnames from 'classnames';
import Dropdown from 'react-toolbox/lib/dropdown';

const graphTypes=[
  {value:'BarChart', label:'Bar Chart'},
  {value:'line', label:'Line Graph'}
];

export default class GraphTypeDropdown extends Component {


  constructor(props) {
        super(props);
        this.state = { value: 'line' };

        this.handleChange=this.handleChange.bind(this);
  }

  handleChange(changeGraphType,value){
    this.setState({value: value});
    changeGraphType(value);
  };

  render () {
    const { changeGraphType } = this.props;
    return (
      <Dropdown
        auto
        onChange={this.handleChange.bind(this,changeGraphType)}
        source={graphTypes}
        value={this.state.value}
      />
    );
  }
}
