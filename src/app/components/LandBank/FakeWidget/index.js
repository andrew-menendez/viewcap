import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

// import './style.css';

export default class FakeWidget extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}


  render() {
    const { className, modelobj } = this.props;
    var style={
      height:'300px',
      width:'200px',
      margin:'10px',
      'backgroundColor':'aqua',
      'borderRadius':'10px'
    }
    return (
      <div className={classnames('FakeWidget', className)}>
        <div style={style}>
        </div>
      </div>
    );
  }
}