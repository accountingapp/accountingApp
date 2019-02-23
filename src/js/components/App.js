import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    return (
          <BrowserRouter>
            <Fragment>
              <Switch>
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

