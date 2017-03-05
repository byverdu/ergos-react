import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup } from 'reactstrap';
import { getModalItems } from '../utils/';

export default class ErgosModal extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      modal: false
    };
    console.log( props );
    this.toggle = this.toggle.bind( this );
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { textBtn, header, content } = this.props.modalData;
    return (
      <div>
        <Button outline color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            { header }
          </ModalHeader>

          <ModalBody>
            <ListGroup>
              { getModalItems( content ) }
            </ListGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="success" onClick={this.toggle}>
              {textBtn}
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
