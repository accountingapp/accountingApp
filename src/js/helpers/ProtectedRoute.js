import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Subscribe } from 'unstated';
import AppContainer from '../container/AppContainer';

class ProtectedRoute extends Component {
  render() {
    const { component: Comp, render, ...props } = this.props;

    return (
      <Subscribe to={[AppContainer]}>
        {app => (
          <Route
            {...props}
            render={() => {
              if (app.isAuthenticated()) {
                if (Comp) return <Comp {...props} />
                return render(props);
              } 
              return <Redirect to="/user-login" />
            }}
          />
        )}
      </Subscribe>
    )
  }

}

export default ProtectedRoute;