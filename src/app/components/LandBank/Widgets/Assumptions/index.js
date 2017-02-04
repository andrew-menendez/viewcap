import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';

const labelStyle={
  marginTop:'30px',
  marginLeft:'20px'

}

export default class Assumptions extends Component {

  constructor(props) {
        super(props);
        this.state = {
              totalcost:11250000,
              numberOfProjects:1,
              grossCost:11250000,
              dilligenceCosts:25000
              }

      //this.fetchData=this.fetchData.bind(this)
      this.handleChange = this.handleChange.bind(this);
    }

  handleChange(name, value){
    this.setState({...this.state, [name]: value});
  };

  render(){
    const { className, data, params } = this.props;


    return (
          <div className={classnames('Assumptions', className)}>


            <form>

                <section>

                <Row>
                  <Col xs>
                    <div style={labelStyle}> Total Cost </div>
                  </Col>
                  <Col xs>
                    <Input  name='totalcost' type="text" required  value={this.state.totalcost} onChange={this.handleChange.bind(this,'totalcost')}/>
                  </Col>
                </Row>
                <Row>
                  <Col xs>
                    <div style={labelStyle}> Number of Projects </div>
                  </Col>
                  <Col xs>
                    <Input  name='numberOfProjects' type="text" required  value={this.state.numberOfProjects} onChange={this.handleChange.bind(this,'numberOfProjects')}/>
                  </Col>
                </Row>
                <Row>
                  <Col xs>
                    <div style={labelStyle}> Gross Cost </div>
                  </Col>
                  <Col xs>
                    <Input  name='grossCost' type="text" required  value={this.state.grossCost} onChange={this.handleChange.bind(this,'grossCost')}/>
                  </Col>
                </Row>
                <Row>
                  <Col xs>
                    <div style={labelStyle}> Dilligence Costs </div>
                  </Col>
                  <Col xs>
                    <Input  name='dilligenceCosts' type="text" required  value={this.state.dilligenceCosts} onChange={this.handleChange.bind(this,'dilligenceCosts')}/>
                  </Col>
                </Row>

              </section>
              <Button>Update</Button>
        </form>


          </div>
        )
    }

}