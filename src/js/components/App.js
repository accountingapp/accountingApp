import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Owner from './Owner';
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
                    path="/ownerPage/:ownerId"
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

