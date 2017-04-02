import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../components/subComponents/loading';
import { getActivityLinks } from '../components/utils';

export default class Activities extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      content: this.props.data.content,
      activityContent: this.props.data.activityContent,
      lang: this.props.data.langValue
    };
  }

  componentWillReceiveProps( nextProps ) {
    this.setState({
      content: nextProps.data.content,
      activityContent: nextProps.data.activityContent,
      lang: nextProps.data.langValue
    });
  }

  createLink() {
    const { activityContent, lang } = this.state;
    return activityContent.linksList[ lang ];
  }

  render() {
    const { content } = this.state;
    const links = this.createLink();
    if( !content ) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    return (
      <Row>
        <Col xs="12">
          { ReactHtmlParser( content )}

          {getActivityLinks( this.props.match, links )}
        </Col>
      </Row>
    );
  }
}
