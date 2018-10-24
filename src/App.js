import React, { Component } from "react";
import LoginPage from "./components/LoginPage.js";
import SignupPage from "./components/SignupPage.js";
import { Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
        </Switch>
      </main>
    );
  }
}

export default App;
