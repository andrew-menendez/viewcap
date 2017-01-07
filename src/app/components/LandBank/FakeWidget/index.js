import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import {Col} from 'react-flexbox-grid/lib';
import {Button} from 'react-toolbox/lib/button';
// import './style.css';

export default class FakeWidget extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

    constructor(props) {
        super(props)
        this.state = {

        }

      this.widgetServer = this.widgetServer.bind(this);
    }

  widgetServer = (type) => {

    const widgeObj= {
        'type1':<p> this is one widget </p>,
        'type2':<p> this is a different widget </p>

    }

    return widgeObj[type]
  }
  //
  render() {
    const { className, widget, remove } = this.props;
    var style={
      height:'300px',
      width:'200px',
      margin:'10px',
      'backgroundColor':'aqua',
      'borderRadius':'10px'
    }
    return (
      <div className={classnames('FakeWidget', className)}>
        <Col xs>
          <div style={style}>
            <h3>{widget.title}</h3>
            <Button onClick={()=>remove(widget.id)}>X</Button>
            {this.widgetServer(widget.type)}
          </div>
        </Col>
      </div>
    );
  }
}