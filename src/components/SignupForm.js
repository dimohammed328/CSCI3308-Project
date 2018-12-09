import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../styles/LoginForm.css";
const axios = require("axios");
export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
    this.state = { userAvail: true };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit = e => {
    e.preventDefault();
    var that = this;
    axios
      .post("https://lyricrace-backend.herokuapp.com/signup/", {
        username: e.target[0].value,
        password: e.target[1].value
      })
      .then(function(response) {
        if (response.data.user) {
          console.log("response: ", response);
          that.props.history.push("/login");
        } else {
          that.setState({ userAvail: false });
        }
      })
      .catch(function(error) {
        console.log("why the fuck", error);
      });
  };
  render() {
    return (
      <div className="loginRow">
        <div className="loginHolder">
          <Form className="loginForm" onSubmit={this.onSubmit}>
            <h2>Create an Account</h2>
            {!this.state.userAvail ? <h3>Username taken</h3> : <div />}
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </FormGroup>
            <Button className="submitButton" color="primary">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
