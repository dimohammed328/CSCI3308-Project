import React, { Component } from "react";
import SignupForm from "./SignupForm.js";
import NavBar from "./NavBar.js";

export default class SignupPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SignupForm />
      </div>
    );
  }
}
