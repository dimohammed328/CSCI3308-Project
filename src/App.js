import React, { Component } from "react";
import LoginForm from "./components/LoginForm.js";
import SignupForm from "./components/SignupForm.js";
import NavBar from "./components/NavBar.js";
var axios = require("axios");
import { Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }
  spinner = function() {
    setInterval(spinner, 10000);
    console.log("spinner");
    axios.get("https://lyricrace.herokuapp.com");
  };
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
