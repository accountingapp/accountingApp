import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Subscribe } from 'unstated';
import Home from './Home';
import Owner from './Owner';
import Account from './Account';
import Process from './Process';
import Header from './Header';
import Login from './Login';
import AppContainer from '../container/AppContainer';
import ProtectedRoute from '../helpers/ProtectedRoute';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Subscribe to={[AppContainer]}>
        {(app) => (
          <BrowserRouter>
            <Fragment>
              <Header user={app.state.userId}/>
              <Switch>
                  <ProtectedRoute 
                    component={Owner} 
                    path="/owner/:ownerId"
                  />
                  <ProtectedRoute 
                    component={Account} 
                    path="/account/:accountId"
                  />
                  <ProtectedRoute 
                    component={Process} 
                    path="/process/:processId"
                  />
                  <ProtectedRoute 
                    component={Home} 
                    exact path="/"
                  />
                  <Route
                    component={Login}
                    path="/user-login"
                  />
              </Switch>
            </Fragment>
          </BrowserRouter>
        )}
        </Subscribe>
    );
  }
}
export default App;

