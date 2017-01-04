import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import ModelCard from '../ModelCard'
// import './style.css';

export default class Model extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  getUrl(loadPath){
    return loadPath.toLowerCase();
  }

  render() {
    const { className, modelobj } = this.props;
    var style={
      float:'left'
    }
    return (
      <div className={classnames('Model', className)}>
        <div className="card-wrap" style={style}>
          <ModelCard modelobj={modelobj}/>
        </div>
      </div>
    );
  }
}