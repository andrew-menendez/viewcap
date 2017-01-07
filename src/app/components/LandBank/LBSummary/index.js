import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import FakeWidget from '../FakeWidget';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';

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
                      type: 'type1',
                      title: 'Fake 1'
                    },
                    {
                      id:2,
                      type: 'type2',
                      title: 'Fake 2'
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
  //

  render() {
    const { className } = this.props;
    const { widgets } = this.state;
    const removeWidget = this.removeWidget;

    return (
      <div className={classnames('LBSummary', className)}>
        <Grid fluid>
          <Row around="xs">

              {(widgets) ? widgets.map((widget,i)=> <FakeWidget key={i} widget={widget} remove={removeWidget} /> )
                    : <span>no widgets found</span>
                  }

          </Row>
        </Grid>
      </div>
    );
  }
}