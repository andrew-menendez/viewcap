import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar  } from 'recharts';

import './style.css';

const CustomizedAxisTick = React.createClass({
  render () {
    const {x, y, stroke, payload} = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-30)">{payload.value}</text>
      </g>
    );
  }
});

export default class MyBarChart extends Component {

  constructor(props) {
        super(props);
        this.state = {

              }

      //this.fetchData=this.fetchData.bind(this)
      //this.removeWidget=this.removeWidget.bind(this)
    }

  render(){
    const { className, data, params } = this.props;
    console.log("data inside BarChart", data);
    console.log("params inside BarChart", params);

    return (
          <div className={classnames('MyBarChart', className)}>

            <BarChart width={Number(params.width)} height={Number(params.height)} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>


              <CartesianGrid stroke="#ccc" />
                <XAxis dataKey={params.xKey} name={params.xName} height={60} tick={<CustomizedAxisTick/>} interval={0}/>
                <YAxis name={params.yName}/>
                <Tooltip />
                <Legend verticalAlign="top"/>
                <Bar dataKey={params.bar1Key} fill="#8884d8" />
                <Bar dataKey={params.bar2Key} fill="#82ca9d" />
                <Bar dataKey={params.bar3Key} fill="#3333CC" />

            </BarChart>
          </div>
        )
    }

}