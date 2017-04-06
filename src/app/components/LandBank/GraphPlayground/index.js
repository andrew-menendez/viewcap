import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import {Button} from 'react-toolbox/lib/button';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import WidgetWrapper from '../WidgetWrapper';

export default class GraphPlayground extends Component {

  constructor(props) {
        super(props);
        this.state = {
                widgets:[{
                      id:1,
                      type: 'ModelshopChart',
                      title: 'Projections',
                      subtitle:'just a placeholder',
                      style:{'minWidth':'300px', 'minHeight':'350px'}
                    }]
              }

      this.removeWidget=this.removeWidget.bind(this)
      //this.handleChange = this.handleChange.bind(this);

    }

  removeWidget(id){
    //need to use some filter method
      let _widgets=this.state.widgets;
      console.log(_widgets);
      if(_widgets.length){
        _widgets = _widgets.filter(widget=> widget.id != id)
      }

      this.setState({widgets:_widgets})
    }



  render(){
    const { className} = this.props;
    const { widgets } = this.state;
    const removeWidget = this.removeWidget;
    return (
          <div className={classnames('GraphPlayground', className)}>
          <p> GRAPHS!</p>
          <Row>
           <Row around = "xs">
          {(widgets) ? widgets.map((widget,i)=> <WidgetWrapper key={i} widget={widget} remove={removeWidget} /> )
                    : <span>no widgets found</span>
                  }
           </Row>
          </Row>
          </div>
        )
    }

}