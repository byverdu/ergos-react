import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../components/subComponents/loading';
import { getActivityLinks } from '../components/utils';
import * as Renderer from '../components/utils/renderers';

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
    const { content, activityContent, lang } = this.state;
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
              <Route
                path={`${this.props.match.path}/ludiques`}
                render={Renderer.commonComponent.bind(
                  this,
                  'ludicas',
                  activityContent.data,
                  lang,
                  {text: 'cat', url: {pathname: '/actividades/ludicas`'}},
                  true
                )}
              />
              <Route
                path={`${this.props.match.path}/ludicas`}
                render={Renderer.commonComponent.bind(
                  this,
                  'ludicas',
                  activityContent.data,
                  lang,
                  {text: 'es', url: {pathname: '/actividades/ludiques`'}},
                  true
                )}
              />
        </Col>
      </Row>
    );
  }
}
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
