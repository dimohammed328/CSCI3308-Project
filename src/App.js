import React, { Component } from "react";
import LoginForm from "./components/LoginForm.js";
import SignupForm from "./components/SignupForm.js";
import NavBar from "./components/NavBar.js";
import SongSelection from "./components/SongSelection.js";
import Leaderboard from "./components/Leaderboard.js";
import { Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/songselection" component={SongSelection} />
          <Route path="/leaderboard" component={Leaderboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
