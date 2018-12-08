import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";
import "../styles/LoginForm.css";
import cookie from "react-cookies";
const axios = require("axios");
export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
    this.state = { loginAttempt: false };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit = e => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    var that = this;
    axios
      .post("https://lyricrace-backend.herokuapp.com/login/", {
        username: e.target[0].value,
        password: e.target[1].value
      })
      .then(function(response) {
        console.log("response: ", response);
        if (response.data.user) {
          that.setState({ loginAttempt: true });
          cookie.save("sessionID", response.data.sessionID, {
            expires: new Date(response.data.session.expires)
          });
          cookie.save("lyricraceUser", response.data.user.username, {
            expires: new Date(response.data.session.expires)
          });
          that.setState({
            username: response.data.user.username,
            sessionID: response.data.sessionID
          });
          that.props.updateState(that.state);
          that.props.history.push("/songselection");
        } else {
          console.log("incorrect recorded");
          that.setState({ loginAttempt: true });
          console.log(that.state);
        }
      })
      .catch(function(error) {
        console.log("why the fuck", error);
      });
  };
  render() {
    if (!this.state.loginAttempt) {
      return (
        <div className="loginRow">
          <div className="loginHolder">
            <Form className="loginForm" onSubmit={this.onSubmit}>
              <h2>Log In</h2>
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
                Log In
              </Button>
            </Form>
          </div>
        </div>
      );
    } else {
      return (
        <div className="loginRow">
          <div className="loginHolder">
            <Form className="loginForm" onSubmit={this.onSubmit}>
              <h3>Incorrect Username/Password</h3>
              <h2>Log In</h2>
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
                Log In
              </Button>
            </Form>
          </div>
        </div>
      );
    }
  }
}
