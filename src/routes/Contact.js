import React, { Component } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
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
          <Form>
            <FormGroup>
              <Label for="exampleEmail">{name}</Label>
              <Input type="text" name={name} placeholder={name} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="email" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
  }
}
