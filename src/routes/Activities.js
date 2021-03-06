import React, { Component } from 'react';
import { Route } from 'react-router-dom';

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
      <div className="ergos-activities">
        { ReactHtmlParser( content )}
        <div className="ergos-activities__links">
          {getActivityLinks( this.props.match, links )}
        </div>

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
            this.subComponentParams( 'ludicas', activityContent.data, 'es', '/activitats/ludiques' )
          )}
        />

        {/* intergeneracional Routes */}
        <Route
          path={`${this.props.match.path}/cat/intergeneracional`}
          render={Renderer.commonComponent.bind(
            this,
            this.subComponentParams( 'inter', activityContent.data, 'cat', '/actividades/es/intergeneracional' )
          )}
        />
        <Route
          path={`${this.props.match.path}/es/intergeneracional`}
          render={Renderer.commonComponent.bind(
            this,
            this.subComponentParams( 'inter', activityContent.data, 'es', '/activitats/cat/intergeneracional' )
          )}
        />

        {/* Voluntariado Routes */}
        <Route
          path={`${this.props.match.path}/voluntariat`}
          render={Renderer.commonComponent.bind(
            this,
            this.subComponentParams( 'volunt', activityContent.data, 'cat', '/actividades/voluntariado' )
          )}
        />
        <Route
          path={`${this.props.match.path}/voluntariado`}
          render={Renderer.commonComponent.bind(
            this,
            this.subComponentParams( 'volunt', activityContent.data, 'es', '/activitats/voluntariat' )
          )}
        />
      </div>
    );
  }
}
