import React, { Component } from "react";
import LoginForm from "./LoginForm.js";
import NavBar from "./NavBar.js";

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <LoginForm />
      </div>
    );
  }
}
