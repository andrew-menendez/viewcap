import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import axios from 'axios'
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import MyBarChart from '../BarChart';


export default class ModelshopChart extends Component {

  constructor(props) {
        super(props);
        this.state = {
              data:[],
              loading:false,
              dataset:null,
              graphtype:'bar'
              }

      this.fetchData=this.fetchData.bind(this)
      //this.handleChange = this.handleChange.bind(this);
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

        this.setState({
          data:res.data.chartPoints,
          loading:false
        })
        console.log(res);
        console.log(res.data.chartPoints);
        console.log(this.state);
      })

    }

  componentDidMount() {
        this.fetchData('Price Sensitivity Chart');
    }

  render(){
    const { className, data, params } = this.props;


    return (
          <div className={classnames('ModelshopChart', className)}>
           <Button label="edit" icon="gear"/>
            <p> here we want to wrap around a graph</p>




          </div>
        )
    }

}