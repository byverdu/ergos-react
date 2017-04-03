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

    this.subComponentParams = this.subComponentParams.bind( this );
  }

  subComponentParams( componentName, data, langText, langPath ) {
    const langValue = this.state.lang;
    return {
      componentName,
      data,
      langValue,
      langConfig: {
        text: langText,
        url: { pathname: langPath }
      },
      imgProps: true
    }
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
    const { content, activityContent } = this.state;
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

          {/* Ludicas Routes */}
          <Route
            path={`${this.props.match.path}/ludiques`}
            render={Renderer.commonComponent.bind(
              this,
              this.subComponentParams( 'ludicas', activityContent.data, 'cat', '/actividades/ludicas' )
            )}
          />
          <Route
            path={`${this.props.match.path}/ludicas`}
            render={Renderer.commonComponent.bind(
              this,
              this.subComponentParams( 'ludicas', activityContent.data, 'es', '/actividades/ludiques' )
            )}
          />
        </Col>
      </Row>
    );
  }
}
