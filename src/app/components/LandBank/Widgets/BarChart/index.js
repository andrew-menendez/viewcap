import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar  } from 'recharts';


export default class MyBarChart extends Component {

  constructor(props) {
        super(props);
        this.state = {

              }

      //this.fetchData=this.fetchData.bind(this)
      //this.removeWidget=this.removeWidget.bind(this)
    }

  render(){
    const { className, data } = this.props;
    console.log("data inside BarChart", data);

    return (
          <div className={classnames('MyBarChart', className)}>
          <span> Hi I'm a line graph</span>
            <BarChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>


              <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="subdivision" name="subdivision"/>
                <YAxis name="Average Sales"/>
                <Tooltip />
                <Legend />
                <Bar dataKey="averageSales" fill="#8884d8" />
                <Bar dataKey="closedToDate" fill="#82ca9d" />

            </BarChart>
          </div>
        )
    }

}