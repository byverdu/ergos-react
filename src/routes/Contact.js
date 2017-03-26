import React, { Component } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Loading from '../components/subComponents/loading';

export default class Contact extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      content: this.props.data
    };
  }

  shouldComponentUpdate( nextProps, nextState ) {
    return nextProps.data !== this.state.content;
  }

  componentDidUpdate( nextProps, nextState ) {
    this.setState({content: nextProps.data})
  }

  render() {
    const { address, email, message, name, telephone } = this.state.content;
    if( !address ) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    return (
      <Row>
        <Col xs="12">
          <p>{address}</p>
          <Form>
            <FormGroup>
              <Label for="name">{name}</Label>
              <Input type="text" name={name} placeholder={name} id="name"/>
            </FormGroup>
            <FormGroup>
              <Label for="telephone">{telephone}</Label>
              <Input type="number" name={telephone} id="telephone" placeholder={telephone} />
            </FormGroup>
            <FormGroup>
              <Label for="email">{email}</Label>
              <Input type="email" name={email} id="email" placeholder={email} />
            </FormGroup>
            <FormGroup>
              <Label for="message">{message}</Label>
              <Input type="textarea" name={message} placeholder={message} id="message" />
            </FormGroup>
            <Button outline color="primary">Enviar</Button>
          </Form>
        </Col>
      </Row>
    );
  }
}
