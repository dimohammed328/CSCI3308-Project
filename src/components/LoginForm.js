import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import bcrypt from "bcrypt-nodejs";
import { Redirect } from "react-router-dom";
import "../styles/LoginForm.css";
const axios = require("axios");
export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };

    this.onUserChange = this.onUserChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onUserChange (e) {
    this.setState({userName: e.target.value});
  }
  onPasswordChange (e) {
    this.setState({password: e.target.value});
  }

  onSubmit(e) {
    alert('A name was submitted: ' + this.state.userName);
    alert('A password was submitted: ' + this.state.password);
    e.preventDefault();
    
    axios
      .post("https://lyricrace-backend.herokuapp.com/login/", {
        username: e.target[0].value,
        password: e.target[1].value
      })
      .then(res => {
        const response = res.data.message;
        if(response=="Successfully Logged In")
        {
          
        }
        else
        {
          alert(response);
        }
      })
      .catch(function(error) {
        console.log("why the fuck", error);
      });
    }

  render() {
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
                value={this.state.userName}
                onChange={this.onUserChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onPasswordChange}
              />
            </FormGroup>
            <Button type="submit" className="submitButton" color="primary">
                Log In
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
