import React, { Component } from "react";
import LoginPage from "./components/LoginPage.js";
import SignupPage from "./components/SignupPage.js";
import LoginForm from "./components/LoginForm.js";
import SignupForm from "./components/SignupForm.js";
import NavBar from "./components/NavBar.js";
import { Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
