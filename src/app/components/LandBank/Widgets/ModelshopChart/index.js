import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import axios from 'axios'
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';

import ChartServer from './ChartServer';
//ultimately move this inside a database? or a config file?


const dataConfig= {
      priceSensitivity:{
        setName:'Price Sensitivity Chart',
        chartParams:{
          BarChart:{
              width:600,
              height:400,
              xKey:'priceChange',
              xName: 'Price Change',
              yName:'$',
              bar1Key:'finishedLotValue',
              bar2Key:'paperLotValue'
            }
        }//end chart Params
      }
    };


export default class ModelshopChart extends Component {

  constructor(props) {
        super(props);
        this.state = {
              data:[],
              loading:false,
              dataset:null,
              chartParams:{},
              chartType:'BarChart'
              }

      this.fetchData=this.fetchData.bind(this)
      //this.handleChange = this.handleChange.bind(this);
      this.processData=this.processData.bind(this);

    }

  handleChange(name, value){
    this.setState({...this.state, [name]: value});
  };

  fetchData(chartName){
      this.setState({loading:true});

      return axios.get('api/chartdata', {
              params:{
                username:'viewcap',
                model:'LandBank',
                chart:chartName
              }
          })
      .then((res)=>{

        let processedData=this.processData(res.data.chartPoints);

        this.setState({
          data:processedData,
          loading:false
        })
        // return processedData;
        console.log(res);
        console.log(res.data.chartPoints);
        console.log(this.state);
      })

    }
  processData(records){
      let _records=records;
      _records.forEach(function(record){
        let keys=Object.keys(record);
          keys.forEach((key)=>{
            record[key]=Number(record[key]);
          })
       })
      return _records;
    }

  setParams(dataset,type){
    console.log("set params ",dataConfig[dataset].chartParams[type]);
    this.setState({
      chartParams:dataConfig[dataset].chartParams[type]
    })
  }

  componentDidMount() {
        this.fetchData('Price Sensitivity Chart');
        this.setParams('priceSensitivity','BarChart')
    }

  //createComp()


//
  render(){
    const { className } = this.props;
    const { data, chartParams} = this.state;
    const type='BarChart';

    // instead create graphServer

    return (
          <div className={classnames('ModelshopChart', className)}>

            <p> here we want to wrap around a graph</p>
            <ChartServer type={type} data={data} params={chartParams}/>
          </div>
        )
    }

}