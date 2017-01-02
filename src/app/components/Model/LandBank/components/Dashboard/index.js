import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class Dashboard extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Dashboard', className)} {...props}>
        <h1>
         dashboard time
        </h1>
      </div>
    );
  }
}