import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/*
 * 
 */
import Login from "./components/pages/login/Login";
import Analytics from './components/pages/analytics/Analytics';
import ManageData from './components/pages/manageData/ManageData';
import Navbar from './components/Navbar.js'

import { ProvideAuth } from "./authentication/use-auth";

import { PrivateRoute } from "./authentication/PrivateRoute";

// This example has 3 pages: a public page, a protected
// page, and a login screen. In order to see the protected
// page, you must first login. Pretty standard stuff.
//
// First, visit the public page. Then, visit the protected
// page. You're not yet logged in, so you are redirected
// to the login page. After you login, you are redirected
// back to the protected page.
//
// Notice the URL change each time. If you click the back
// button at this point, would you expect to go back to the
// login page? No! You're already logged in. Try it out,
// and you'll see you go back to the page you visited
// just *before* logging in, the public page.

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <div className="App">

          <Navbar />

          <Switch>
            <Route exact path="/">
              <div>
                Home
              </div>
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/analytics">
              <Analytics />
            </PrivateRoute>
            <PrivateRoute exact path="/manage-data">
              <ManageData />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}