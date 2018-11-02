import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import bcrypt from "bcrypt-nodejs";
import { Redirect } from "react-router-dom";
import "../styles/LoginForm.css";
const axios = require("axios");
export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var onSubmit = e => {
      e.preventDefault();
      console.log(e.target[0].value);
      console.log(e.target[1].value);
      axios
        .post(
          "https://lyricrace-backend.herokuapp.com/login/",
          {
            username: e.target[0].value,
            password: e.target[1].value
          },
          { headers: { "Access-Control-Allow-Origin": "true" } }
        )
        .then(function(response) {
          console.log("response: ", response);
        })
        .catch(function(error) {
          console.log("why the fuck", error);
        });
    };
    return (
      <div className="loginRow">
        <div className="loginHolder">
          <Form className="loginForm" onSubmit={onSubmit}>
            <h2>Log In</h2>
            <FormGroup>
              <Label for="username">Test</Label>
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
