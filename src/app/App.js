import React from 'react';
import 'react-toolbox/lib/commons.scss';           // Import common styles
import PurpleAppBar from './PurpleAppBar.js';      // AppBar with simple overrides
import SuccessButton from './SuccessButton.js';    // A button with complex overrides
import { Button } from 'react-toolbox/lib/button'; // Bundled component import
import { Checkbox } from 'react-toolbox/lib/checkbox'; // Bundled component import
import SampleLayout from './components/Layout'
// import Sidebar from 'react-sidebar';
// import SidePanel from './components/SidePanel';
import SampleAppBar from './components/sampleAppBar';
/*


*/



var App = React.createClass({
  render: function(){
    return (
      <SampleLayout/>
      );
  }
})

module.exports = App;
