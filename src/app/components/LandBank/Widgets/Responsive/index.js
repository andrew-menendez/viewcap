import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import {Col} from 'react-flexbox-grid/lib';

export default class Responsive extends Component {

  constructor(props) {
        super(props);
        this.state = {

              }

      //this.fetchData=this.fetchData.bind(this)
      //this.removeWidget=this.removeWidget.bind(this)
    }

  render(){
    const { className } = this.props;


    return (
          <div className={classnames('Responsive', className)}>


            <div style={{'backgroundColor':'blue', 'min-width':'100px', 'min-height':'100px'}}></div>


          </div>
        )
    }

}