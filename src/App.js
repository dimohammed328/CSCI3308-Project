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
      sessionID: cookie.load("sessionID")
    };
  }
  componentDidMount() {
    axios
      .post("https://lyricrace-backend.herokuapp.com/authenticate", {
        sessionID: this.state.sessionID
      })
      .then(response => {
        if (response.data.id) {
          this.setState({ user: response.data.id });
        } else {
          this.setState({ user: false });
        }
      });
  }
  updateState(obj) {
    this.setState(obj);
    if (this.state.sessionID) {
      axios
        .post("https://lyricrace-backend.herokuapp.com/authenticate", {
          sessionID: this.state.sessionID
        })
        .then(response => {
          if (response.data.id) {
            this.setState({ user: response.data.id });
          } else {
            this.setState({ user: false });
          }
        });
    }
  }

  render() {
    console.log(this.state.user);
    if (this.state.user) {
      return (
        <div>
          <NavBar state={this.state} updateState={this.updateState} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <SongSelection
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
    } else {
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
}

export default App;

