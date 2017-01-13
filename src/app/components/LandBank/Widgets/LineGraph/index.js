import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { LineChart, Line, CartesianGrid, XAxis, YAxis  } from 'recharts';


export default class LineGraph extends Component {

  constructor(props) {
        super(props);
        this.state = {

              }

      //this.fetchData=this.fetchData.bind(this)
      //this.removeWidget=this.removeWidget.bind(this)
    }

  render(){
    const { className, data } = this.props;
    console.log("data inside lingraph", data);

    return (
          <div className={classnames('LineGraph', className)}>
          <span> Hi I'm a line graph</span>
            <LineChart width={400} height={300} data={data}>
              <Line type="monotone" dataKey="averageSales" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="subdivision" />
                <YAxis />
            </LineChart>
          </div>
        )
    }

}