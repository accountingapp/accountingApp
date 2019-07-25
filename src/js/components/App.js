import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Subscribe } from "unstated";
// import Owner from "./Owner";
// import Account from "./Account";
// import Process from "./Process";
// import Resource from "./Resource";
import Header from "./Header";
import EventTabs from "./EventTabs";
import EventsHome from "./EventsHome";
import Event from "./EditEvent/Event";
import Settings from "./Settings";
import Login from "./Login";
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
                {/* <ProtectedRoute component={Owner} path="/owner/:ownerId" />
                <ProtectedRoute
                  component={Account}
                  path="/account/:accountId"
                />
                <ProtectedRoute
                  component={Resource}
                  path="/resource/:resourceId"
                /> */}
                {/* <ProtectedRoute 
                    component={LandingPage} 
                    exact path="/"
                  /> */}
                <ProtectedRoute component={Settings} exact path="/settings" />
                <Route
                  component={EventTabs}
                  user={app.state.email}
                  exact
                  path="/event-details/:eventId"
                />
                <Route
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
