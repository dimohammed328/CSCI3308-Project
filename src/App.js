import React, { Component } from "react";
import LoginForm from "./components/LoginForm.js";
import SignupForm from "./components/SignupForm.js";
import NavBar from "./components/NavBar.js";
import cookie from "react-cookies";
import { Switch, Route } from "react-router-dom";
import "./App.css";
const axios = require("axios");
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: cookie.load("username"),
      userid: cookie.load("userid"),
      authenticated: false
    };
  }

  componentWillMount() {
    console.log(this.state);
    axios
      .post("https://lyricrace-backend.herokuapp.com/", {
        user: this.state.username,
        id: this.state.userid
      })
      .then(res => {
        console.log(res);
      });
  }
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
