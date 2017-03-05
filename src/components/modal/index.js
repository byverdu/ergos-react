import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ErgosModal extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      modal: false
    };

    this.handleToggle = this.handleToggle.bind( this );
  }

  handleToggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button outline color="danger" onClick={this.handleToggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            Informaciò Legal
          </ModalHeader>

          <ModalBody>
            Hello World
          </ModalBody>

          <ModalFooter>
            <Button color="success" onClick={this.handleToggle}>Tancar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
