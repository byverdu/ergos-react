import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Loading from '../components/subComponents/loading';
import Map from '../components/map';

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
      <div>
        <Row>
          <Col xs="12">
            <a href="https://www.google.com/maps/place/41.404682,2.123773" target="_blank" className="map">{address}</a>

            <Form action="sendEmail.php" method="post">
              <FormGroup>
                <Label for="name">{name}</Label>
                <Input type="text" name="first_name" placeholder={name} id="name"/>
              </FormGroup>
              <FormGroup>
                <Label for="telephone">{telephone}</Label>
                <Input type="number" name="telephone" id="telephone" placeholder={telephone} />
              </FormGroup>
              <FormGroup>
                <Label for="email">{email}</Label>
                <Input type="email" name="email" id="email" placeholder={email} />
              </FormGroup>
              <FormGroup>
                <Label for="message">{message}</Label>
                <Input type="textarea" name="comments" placeholder={message} id="message" />
              </FormGroup>
              <Input className="btn btn-outline-primary" value="Enviar" type="submit"/>
            </Form>
          </Col>
        </Row>
        <Row>
          <Map />
        </Row>
      </div>
    );
  }
}
