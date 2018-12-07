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

  document.addEventListener('DOMContentLoaded', () => {
  let elements = []
  let container = document.querySelector('#container')
  // Add each row to the array
  container.querySelectorAll('.row').forEach(el => elements.push(el))
  // Clear the container
  container.innerHTML = ''
  // Sort the array from highest to lowest
  elements.sort((a, b) => b.querySelector('.score').textContent - a.querySelector('.score').textContent)
  // Put the elements back into the container
  elements.forEach(e => container.appendChild(e))
  })
  console.log('aloha world!');

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
