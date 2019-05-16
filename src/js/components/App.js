import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Subscribe } from 'unstated';
import Owner from './Owner';
import Account from './Account';
import Process from './Process';
import Resource from './Resource';
import Header from './Header';
import LandingPage from './LandingPage';
import Settings from './Settings';
import Login from './Login';
import Form from './LedgerTool/Form';
import AppContainer from '../container/AppContainer';
import ProtectedRoute from '../helpers/ProtectedRoute';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    const state = this.state;
    return (
      <Subscribe to={[AppContainer]}>
        {(app) => (
          <BrowserRouter>
            <Fragment>
              <Header className="header" user={app.state.userId}/>
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
                    component={Resource} 
                    path="/resource/:resourceId"
                  />
                  {/* <ProtectedRoute 
                    component={LandingPage} 
                    exact path="/"
                  /> */}
                  <ProtectedRoute 
                    component={Settings} 
                    exact path="/settings"
                  />
                  {/* <Route
                    component={LandingPage}
                    path="/user-login"
                  /> */}
                  <ProtectedRoute
                    component={Form}
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

