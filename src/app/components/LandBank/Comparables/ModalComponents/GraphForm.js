import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Dropdown from 'react-toolbox/lib/dropdown';
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';

const graphOptions={
      BarChart:{
        title:{type:'text'},
        width:{type:'dropdown',options:[{value:'300',label:'small'},
                                        {value:'600',label:'med'},
                                        {value:'900',label:'large'}
                                      ]},
        height:{type:'dropdown',options:[{value:'300',label:'small'},
                                        {value:'600',label:'med'},
                                        {value:'900',label:'large'}
                                      ]},
        xKey:{type:'dropdown',options:[{value:'subdivision', label:'Subdivision'},
                                       {value:'zone', label:'Zone'},
                                       {value:'builder',label:'Builder'}
                                       ]},
        xName:{type:'text'},
        yName:{type:'text'}
        // bar1Key:{type:'dropdown',values:["CLOS3","CLOS4", "averageSales","closedToDate","last12Months","lastYearClose","lotSQFT","monthAverage","thisYearClosed","totalLots"]},
        // bar2Key:{type:'dropdown',values:["CLOS3","CLOS4", "averageSales","closedToDate","last12Months","lastYearClose","lotSQFT","monthAverage","thisYearClosed","totalLots"]},
        // bar3Key:{type:'dropdown',values:["CLOS3","CLOS4", "averageSales","closedToDate","last12Months","lastYearClose","lotSQFT","monthAverage","thisYearClosed","totalLots"]}
      },
      line:{
        title:{type:'text'},
        width:{type:'text'},
        height:{type:'text'}
      }
    };

const inputStyle = {
  margin:'5px',
  border:'1px solid #efefef',
  borderRadius:'5px'
}


export default class GraphForm extends Component {


  constructor(props) {
        super(props);
        this.state = {
          type: null,
          values:{}
         };

        this.handleChange = this.handleChange.bind(this);
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.buildForm = this.buildForm.bind(this);
  }

  handleChange(field, value){

    let _values=this.state.values;
    _values[field]=value;
    this.setState({values: _values});
  };

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  handleDropdownChange(key,value){
    let _values=this.state.values;
    _values[key]=value;
    this.setState({values: _values});

  }
  // add a grid around here? need to sort this out.
  buildForm(graphType,graphOptions){
    let schema = graphOptions[graphType];
    let inputFields = Object.keys(schema);

    const listItems = inputFields.map((field,i) => {
      if(schema[field].type ==='text'){
        return (
              <Col key={i} style={inputStyle}>
                <Input key={i}
                       label={field}
                        name={field}
                        type="text"
                        value={this.state.values[field]}
                        onChange={this.handleChange.bind(this,field)}
                      />
              </Col>
            )
      } else if (schema[field].type === 'dropdown') {
          return(
              <Col key={i} style={inputStyle}>
                <Dropdown
                    key={i}
                    auto
                    label={field}
                    onChange={this.handleChange.bind(this,field)}
                    source={schema[field].options}
                    value={this.state.values[field]}
                  />
              </Col>
            )
      } else {
        return (<p key={i}>not text or dropdown</p>)
      }
    });// end map function

  return (
    <Row around="xs" >{listItems}</Row>
    );
  }

  render () {
    const { className, graphType } = this.props;

    return (
      <div className={classnames('GraphForm', className)}>
      <p>Enter or select the values for the graph parameters: </p>

        <Grid fluid>

            {this.buildForm(graphType, graphOptions)}

        </Grid>

      <Button>Submit</Button>
      </div>
    );
  }
}

