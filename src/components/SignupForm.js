import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../styles/LoginForm.css";
const axios = require("axios");
export default class SignupForm extends Component {
  render() {
    var onSubmit = e => {
      e.preventDefault();
      console.log(e.target[0].value);
      console.log(e.target[1].value);
      axios
        .post("https://lyricrace-backend.herokuapp.com/signup/", {
          username: e.target[0].value,
          password: e.target[1].value
        })
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
            <h2>Create an Account</h2>
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
