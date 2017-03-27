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

  renderTransport( transport ) {
    return transport.map(( item, index ) => ( <li key={index}>{item}</li> ));
  }

  render() {
    const { title, address, email, message, name, telephone, route, transport } = this.state.content;
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
          <Col xs="12">
            <h1>{title}</h1>
            <p>{address}</p>
            <Map />
            <a href="https://www.google.es/maps/dir//Carrer+de+Pomaret,+25,+08017+Barcelona/@41.404459,2.1216827,17z/data=!4m16!1m7!3m6!1s0x12a4983e4bf1325b:0xbd8605a8efe44a50!2sCarrer+de+Pomaret,+25,+08017+Barcelona!3b1!8m2!3d41.404459!4d2.1238714!4m7!1m0!1m5!1m1!1s0x12a4983e4bf1325b:0xbd8605a8efe44a50!2m2!1d2.1238714!2d41.404459?hl=es" target="_blank">{route}</a>
            { this.renderTransport( transport ) }
          </Col>
        </Row>
      </div>
    );
  }
}
