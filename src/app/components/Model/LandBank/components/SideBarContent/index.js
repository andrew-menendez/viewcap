import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

const SideBarContent = React.createClass({


  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render: function() {
      const { className, ...props } = this.props;
      return (
        <div className={classnames('SideBarContent', className)} {...props}>
          <h1>
           dashboard time
          </h1>
        </div>
      );
    }
  }

})

module.exports = SideBarContent;