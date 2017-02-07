import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import {Col} from 'react-flexbox-grid/lib';
import {Button} from 'react-toolbox/lib/button';
import MyBarChart from '../../BarChart';


export default class ChartServer extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

    constructor(props) {
        super(props)
        this.state = {

        }

      this.chartServer=this.chartServer.bind(this);
    }

  chartServer(type, data, params){
    console.log("in chart server",params);
      let chartComponent= {
        'BarChart':<MyBarChart data={data} params={params}/>
      };

      return chartComponent[type];
  }

  render() {
    const { className, type, data, params } = this.props;

    return (
      <div className={classnames('ChartServer', className)}>

            {this.chartServer(type, data, params)}

      </div>
    );
  }
}