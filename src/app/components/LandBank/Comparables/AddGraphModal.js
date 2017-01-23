import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Modal from 'react-modal';
import {Button} from 'react-toolbox/lib/button';
// import Select from 'react-select';
// import style from 'react-select/dist/react-select.css';
import GraphTypeDropdown from './ModalComponents/GraphTypeDropdown.js';
import GraphForm from './ModalComponents/GraphForm.js'
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
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.changeGraphType = this.changeGraphType.bind(this);
    }

    openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

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
            <h2 ref="subtitle">Hello</h2>
            <Button onClick={this.closeModal}>X</Button>
            <Button onClick={addGraph}>add a graph</Button>
            <div>Select a type of graph:</div>
            <div>
              <GraphTypeDropdown changeGraphType={this.changeGraphType}/>
            </div>
            <div>
              <GraphForm graphType={graphType}/>
            </div>
        </div>
        </Modal>
      </div>
    );
  }
}
