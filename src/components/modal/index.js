import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup } from 'reactstrap';
import { getModalItems } from '../utils/';

export default class ErgosModal extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      modal: false,
      modalData: this.props.modalData,
      infoTextBtn: this.props.infoTextBtn
    };
    console.log( props );
    this.toggle = this.toggle.bind( this );
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentWillReceiveProps( nextProps ) {
    if ( this.state.modalData.modalTextBtn !== nextProps.modalData.modalTextBtn ) {
      this.setState({
        modalData: nextProps.modalData
      });
    }
  }

  render() {
    const { modalTextBtn, header, content } = this.state.modalData;
    const infoTextBtn = this.state.infoTextBtn;
    return (
      <div className="info-toggle">
        <Button outline color="primary" onClick={this.toggle}>{infoTextBtn}</Button>
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
              {modalTextBtn}
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
