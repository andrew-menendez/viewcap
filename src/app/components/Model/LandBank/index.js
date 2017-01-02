import React, { PropTypes, Component } from 'react';
// import Sidebar from'react-sidebar';
import { AppBar } from 'react-toolbox/lib/app_bar';
import { Button } from 'react-toolbox/lib/button';
import classnames from 'classnames';

import './style.css';


var LandBank = React.createClass({
  getInitialState() {
    return {sidebarOpen: false, sidebarDocked: false};
  },

  onSetSidebarOpen: function(open) {
    this.setState({sidebarOpen: open});
  },

  componentWillMount: function() {
    var mql = window.matchMedia(`(min-width: 800px)`);
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
  },

  componentWillUnmount: function() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  },

  mediaQueryChanged: function() {
    this.setState({sidebarDocked: this.state.mql.matches});
  },

  render: function() {
    var sidebarContent = <b>Sidebar content</b>;

    return (
      <Button label="ok ok"/>
    );
  }
});

module.exports = LandBank;



// export default class LandBank extends Component {
//   // static propTypes = {}
//   // static defaultProps = {}
//   // state = {}

//   constructor(props) {
//         super(props)
//         this.state = {
//             loading:false,
//             models: []
//         }

//       this.processResponse = this.processResponse.bind(this);
//     }

//   render() {
//     const { className, ...props } = this.props;
//     return (
//       <div className={classnames('LandBank', className)} {...props}>
//       <div className='landbank-main'>
//         <h1>
//           About Time!!!!
//         </h1>
//       </div>

//       </div>
//     );
//   }
// }