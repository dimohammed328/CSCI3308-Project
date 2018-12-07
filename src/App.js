import React, { Component } from "react";
import LoginForm from "./components/LoginForm.js";
import SignupForm from "./components/SignupForm.js";
import NavBar from "./components/NavBar.js";
import { Switch, Route } from "react-router-dom";
import cookie from "react-cookies";
import "./App.css";
import SongSelection from "./components/SongSelection.js";
import Leaderboard from "./components/Leaderboard.js";

const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.state = {
      username: cookie.load("lyricraceUser"),
      sessionID: cookie.load("sessionID"),
      userID: axios.post("http://localhost:3001/authenticate")
    };
  }
  updateState(obj) {
    this.setState(obj);
  }

  render() {
    return (
      <div>
        <NavBar state={this.state} updateState={this.updateState} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <LoginForm
                {...props}
                state={this.state}
                updateState={this.updateState}
              />
            )}
          />
          <Route
            path="/login"
            render={props => (
              <LoginForm
                {...props}
                state={this.state}
                updateState={this.updateState}
              />
            )}
          />
          <Route
            path="/signup"
            render={props => (
              <SignupForm
                {...props}
                state={this.state}
                updateState={this.updateState}
              />
            )}
          />
          <Route
            path="/songselection"
            render={props => (
              <SongSelection
                {...props}
                state={this.state}
                updateState={this.updateState}
              />
            )}
          />
          <Route
            path="/leaderboard"
            render={props => (
              <Leaderboard
                {...props}
                state={this.state}
                updateState={this.updateState}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
