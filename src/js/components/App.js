import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Owner from './Owner';
import Account from './Account';
import Process from './Process';
import Header from './Header';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    return (
          <BrowserRouter>
            <Fragment>
              <Header />
              <Switch>
                  <Route 
                    component={Owner} 
                    path="/owner/:ownerId"
                  />
                  <Route 
                    component={Account} 
                    path="/account/:accountId"
                  />
                  <Route 
                    component={Process} 
                    path="/process/:processId"
                  />
                  <Route 
                    component={Home} 
                    exact path="/"
                  />
              </Switch>
            </Fragment>
          </BrowserRouter>
    );
  }
}
export default App;

