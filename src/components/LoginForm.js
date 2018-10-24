import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../styles/LoginForm.css";
export default class LoginForm extends Component {
  render() {
    return (
      <div className="loginRow">
        <div className="loginHolder">
          <Form className="loginForm">
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
