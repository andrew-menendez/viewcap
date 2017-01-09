import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import {Col} from 'react-flexbox-grid/lib';
import {Button} from 'react-toolbox/lib/button';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
// import './style.css';

export default class WidgetWrapper extends Component {
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
      minHeight:'300px',
      minWidth:'200px',
      margin:'10px',
      'borderRadius':'10px',
      borderColor:'black'
    }
    return (
      <div className={classnames('WidgetWrapper', className)}>
        <Col xs>
          <Card style={style}>

          <CardTitle title={widget.title} subtitle="Subtitle here"/>

          <div style={widget.style}>
            {this.widgetServer(widget.type)}
          </div>
          <CardActions>
            <Button label="close" icon="close" onClick={()=>remove(widget.id)} />
          </CardActions>
          </Card>
        </Col>
      </div>
    );
  }
}