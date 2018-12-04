import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import bcrypt from "bcrypt-nodejs";
import { Redirect } from "react-router-dom";
import "../styles/Leaderboard.css";
const axios = require("axios");
export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="container">
    <div class="row">
        <div class="name">Player1</div><div class="score">430</div>
    </div>
    
    <div class="row">
        <div class="name">Player2</div><div class="score">580</div>
    </div>
    
    <div class="row">
        <div class="name">Player3</div><div class="score">310</div>
    </div>
    
    <div class="row">
        <div class="name">Player4</div><div class="score">640</div>
    </div>
    
    <div class="row">
        <div class="name">Player5</div><div class="score">495</div>
    </div>
</div>
    );
  }
}
