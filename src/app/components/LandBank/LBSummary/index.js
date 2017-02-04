import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import WidgetWrapper from '../WidgetWrapper';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';

import style from './flexboxgrid.css';

export default class LBSummary extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
    constructor(props) {
        super(props);
        this.state = {
                activeTab: 'summary',
                widgets: [
                    {
                      id:1,
                      type: 'Assumptions',
                      title: 'Assumptions',
                      subtitle:'just a placeholder',
                      style:{'width':'300px'}
                    },
                    {
                      id:2,
                      type: 'type1',
                      title: 'Another fake',
                      subtitle:'just a placeholder',
                      style:{'width':'300px', 'height':'350px'}
                    },
                    {
                      id:3,
                      type: 'type2',
                      title: 'fake',
                      subtitle:'just a placeholder',
                      style:{'width':'300px'}
                    }
                  ]
                }
      this.removeWidget=this.removeWidget.bind(this)
    }

  removeWidget=(id)=> {
    //need to use some filter method
    let _widgets=this.state.widgets;
    console.log(_widgets);
    if(_widgets.length){
      _widgets = _widgets.filter(widget=> widget.id != id)
    }

    this.setState({widgets:_widgets})
  }
  //
  //<Row around="xs">

  render() {
    const { className } = this.props;
    const { widgets } = this.state;
    const removeWidget = this.removeWidget;

    return (
      <div className={classnames('LBSummary', className)} style={style}>
        <Grid fluid>
          <Row around="xs">

              {(widgets) ? widgets.map((widget,i)=> <WidgetWrapper key={i} widget={widget} remove={removeWidget} /> )
                    : <span>no widgets found</span>
                  }

          </Row>
        </Grid>
      </div>
    );
  }
}