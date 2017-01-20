import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Dropdown from 'react-toolbox/lib/dropdown';
import Input from 'react-toolbox/lib/input';

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
                                      ]}
        //xKey:{type:'dropdown',values:['subdivision','zone','builder']},
        //xName:{type:'text'},
        //yName:{type:'text'},
        //bar1Key:{type:'dropdown',values:["CLOS3","CLOS4", "averageSales","closedToDate","last12Months","lastYearClose","lotSQFT","monthAverage","thisYearClosed","totalLots"]},
        //bar2Key:{type:'dropdown',values:["CLOS3","CLOS4", "averageSales","closedToDate","last12Months","lastYearClose","lotSQFT","monthAverage","thisYearClosed","totalLots"]},
        //bar3Key:{type:'dropdown',values:["CLOS3","CLOS4", "averageSales","closedToDate","last12Months","lastYearClose","lotSQFT","monthAverage","thisYearClosed","totalLots"]}
      },
      line:{
        title:{type:'text'},
        width:{type:'text'},
        height:{type:'text'}
      }
    };

function FormBuilder(props) {
  const graphType = props.graphType;
  const graphOptions = props.graphOptions;
  let schema = graphOptions[graphType];
  let inputFields = Object.keys(schema);

  const listItems = inputFields.map((field,i) => {
    if(schema[field].type ==='text'){
      return (

        <Input key={i} label={field} name={field} type="text"/>
        )
    } else {
      return (<p key={i}>not text</p>)
    }

  }
  );
  return (
    <div>{listItems}</div>
  );
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
        // this.formBuilder = this.formBuilder.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  handleDropdownChange(key,value){
    let _values=this.state.values;
    _values[key]=value;
    this.setState({values: _values});

  };

  // formBuilder(graphType){
  //   let schema=graphOptions[graphType];
  //   console.log(graphType);
  //   console.log(schema);
  //   if(schema){
  //     console.log(Object.keys(schema));
  //       Object.keys(schema).map((_key,i)=>{
  //         console.log(_key)
  //         console.log(i)
  //         return (<p>goodbye</p>)
  //       })
  //     } else {
  //       return (<p>goodbye</p>)
  //     }
  // }


  render () {
    const { className, graphType } = this.props;

    return (
      <div className={classnames('GraphForm', className)}>
        <form onSubmit={this.handleSubmit}>
        <p>hello</p>
        <FormBuilder graphType={graphType} graphOptions={graphOptions}/>

        </form>
      </div>
    );
  }
}

//{this.formBuilder(graphOptions[graphType])}
//{this.formBuilder(graphType)}
