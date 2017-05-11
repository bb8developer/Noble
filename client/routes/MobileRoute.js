import React from 'react';
import { IndexRoute, Route, Redirect } from 'react-router';
import ViewerQuery from './ViewerQuery';
import { AppContainer, MainContainer } from '../relay/containers';

export default (
  <Route
    path='/'
    component={AppContainer}
    queries={ViewerQuery}
    render={(params) => {
      if (params.props) {
        return (
          <AppContainer {...params.props} loading={false} />
        );
      }
      return <AppContainer loading />;
    }}
  >
    <IndexRoute
      component={MainContainer}
      queries={ViewerQuery}
      render={(params) => {
        if (params.props) {
          return (
            <MainContainer {...params.props} />
          );
        }
        return <AppContainer loading />;
      }}
    />
    <Redirect from='*' to='/' />
  </Route>
);

