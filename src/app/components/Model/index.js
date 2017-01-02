import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

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
    return (
      <div className={classnames('Model', className)}>
        <h2><Link to={this.getUrl(modelobj.loadPath)}>{modelobj.name}</Link></h2>
      </div>
    );
  }
}