import React, { Component } from 'react';
import { Row, Col, Progress } from 'reactstrap';
import Loading from '../components/subComponents/loading';
import ReactHtmlParser from 'react-html-parser';

export default class Success extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      content: this.props.data.content,
      counter: 0,
      intervalId: 0,
      timer: 30
    };
  }

  shouldComponentUpdate( nextProps, nextState ) {
    return false;
  }

  componentDidUpdate( nextProps, nextState ) {
    this.setState({content: nextProps.data.content})
  }

  componentDidMount() {
    const intervalId = setInterval( this.setTimer.bind( this ), 1000 );
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval( this.state.intervalId );
  }

  setTimer() {
    this.setState({
      counter: this.state.counter + 3.333334,
      timer: this.state.timer - 1
    });
    if ( this.state.timer === 0 ) {
      // not best solution
      window.location = '/';
    }
  }

  shouldComponentUpdate( nextProps, nextState ) {
    return nextState.counter > this.state.counter;
  }

  render() {
    const { message, progress } = this.state.content;
    const { timer, counter } = this.state;
    if( !message ) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    return (
      <Row>
        <Col xs="12">
          { ReactHtmlParser( message )}
          {progress} 0:{timer < 10 ? `0${timer}` : timer}
          <Progress color="warning" value={counter}> {`${Math.round( counter )}%`} </Progress>
        </Col>
      </Row>
    );
  }
}
