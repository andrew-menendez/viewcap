import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import FakeWidget from '../FakeWidget';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';

export default class LBSummary extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}



  /*

  */

//<Dashboard  widgets={this.state.widgets} layout={this.state.layout}  />
  render() {
    const { className, modelobj } = this.props;
    // var style={
    //   float:'left'
    // }
    return (
      <div className={classnames('LBSummary', className)}>
        <Grid fluid>
          <Row around="xs">
            <Col xs={4} ><FakeWidget/> </Col>
            <Col xs={4} ><FakeWidget/> </Col>
            <Col xs={4} ><FakeWidget/> </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}