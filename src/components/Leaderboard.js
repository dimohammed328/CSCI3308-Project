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

componentDidMount() {
    var list = [];
    axios
        .get("https://lyricrace-backend.herokuapp.com/leaderboard/", {})
        .then(res => {
        console.log(res);
        })
        .catch(function(error) {
        console.log("why the fuck", error);
        });

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

    return (
      <div id="container">
    <div className="row">
        <div className="name">Player1</div><div className="score">430</div>
    </div>
    
    <div className="row">
        <div className="name">Player2</div><div className="score">580</div>
    </div>
    
    <div className="row">
        <div className="name">Player3</div><div className="score">310</div>
    </div>
    
    <div className="row">
        <div className="name">Player4</div><div className="score">640</div>
    </div>
    
    <div className="row">
        <div className="name">Player5</div><div className="score">495</div>
    </div>
</div>
    );
  }
}
