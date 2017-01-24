import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Modal from 'react-modal';
import {Button} from 'react-toolbox/lib/button';
// import Select from 'react-select';
// import style from 'react-select/dist/react-select.css';
import GraphTypeDropdown from './ModalComponents/GraphTypeDropdown.js';
import GraphForm from './ModalComponents/GraphForm.js'
import {Grid, Row, Col} from 'react-flexbox-grid/lib';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const basicStyle={
  minWidth:'300px',
  maxWidth:'600px',
  minHeight:'400px'
}


export default class AddGraphModal extends Component {

  constructor(props) {
        super(props);
        this.state = {
              modalIsOpen: false,
              graphType:'line'
            };

        this.openModal = this.openModal.bind(this);
        // this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.changeGraphType = this.changeGraphType.bind(this);
    }

    openModal() {
    this.setState({modalIsOpen: true});
    this.props.panelClose();
  }

  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   // this is how you change refs
  // put this in render: <h2 ref="subtitle">Hello</h2>
  //   this.refs.subtitle.style.color = '#f00';
  // }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  changeGraphType(value){
    console.log('parent', value)
    this.setState({graphType:value})
  }

  render() {
    const { className, addGraph } = this.props;
    const { graphType } = this.state;

    return (
      <div className={classnames('AddGraphModal', className)} >
        <Button onClick={this.openModal}>Open Modal</Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div style={basicStyle}>
          <div><Button icon='close' floating accent mini style={{float:'right'}} onClick={this.closeModal}></Button></div>

            <h3> Graph Builder</h3>
            <Row start="xs">
              <Col>
                <div style={{padding:'5px', marginTop:'22px', marginRight:'10px'}}>Select a type of graph:</div>
              </Col>
              <Col>
                  <GraphTypeDropdown changeGraphType={this.changeGraphType}/>
              </Col>
            </Row>
            <div>
              <GraphForm  addGraph={addGraph} graphTitle='temp' graphType={graphType} closeModal={this.closeModal}/>
            </div>
            <Button  raised onClick={addGraph}>add graph</Button>
        </div>
        </Modal>
      </div>
    );
  }
}
