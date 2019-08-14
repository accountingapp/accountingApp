import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Subscribe } from "unstated";
import Header from "./Header";
import EventTabs from "./EventTabs";
import EventsHome from "./EventsHome";
// import Event from "./EditEvent/Event";
import Settings from "./Settings";
import Login from "./Login";
import AccountSettings from "./settings/AccountSettings";
import Form from "./LedgerTool/Form";
import AppContainer from "../container/AppContainer";
import ProtectedRoute from "../helpers/ProtectedRoute";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /*eslint-disable*/
  render() {
    return (
      <Subscribe to={[AppContainer]}>
        {app => (
          <BrowserRouter>
            <Fragment>
              <Header className="header" user={app.state.email} />
              <Switch>
                <ProtectedRoute
                  component={AccountSettings}
                  user={app.state.email}
                  exact
                  path="/settings"
                />
                <ProtectedRoute
                  component={EventTabs}
                  user={app.state.email}
                  exact
                  path="/event-details/:eventId"
                />
                <ProtectedRoute
                  component={EventsHome}
                  user={app.state.email}
                  exact
                  path="/"
                />
                {/* <ProtectedRoute
                    component={Form}
                    exact path="/"
                  /> */}
                <Route component={Login} path="/user-login" />
              </Switch>
            </Fragment>
          </BrowserRouter>
        )}
      </Subscribe>
    );
  }
}
export default App;
