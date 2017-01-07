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
                      type: 'type1',
                      title: 'Fake 1'
                    },
                    {
                      type: 'type2',
                      title: 'Fake 2'
                    }
                  ]
                }

    }

    /*
    {widgets.map((widget,i)=>{
                  <Col xs key={i}>
                    <p>{widget.title}</p>
                    {widget.asset}
                  </Col>
               })
            }
    */

  render() {
    const { className } = this.props;
    const { widgets } = this.state;
    // var style={
    //   float:'left'
    // }
    return (
      <div className={classnames('LBSummary', className)}>
        <Grid fluid>
          <Row around="xs">

              {(widgets) ? widgets.map((widget,i)=>  <FakeWidget key={i} widget={widget}/>)
                    : <span>no widgets found</span>
                  }

          </Row>
        </Grid>
      </div>
    );
  }
}