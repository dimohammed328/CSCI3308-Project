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
      .get("https://lyricrace-backend.herokuapp.com/leaderboard/")
      .then(res => {
        this.setState({
          list: res.data.rows.sort((a, b) => b.timesec - a.timesec)
        });
        this.state.list.forEach((item, index) => {
          console.log("hello \n\n\n", item);
          item.key = index;
        });
        this.setState({
          listHTML: this.state.list.map(item => (
            <div key={item.key} className="row">
              <div className="name">{item.username}</div>
              <div classname="score">{item.timesec}</div>
            </div>
          ))
        });
        console.log(this.state.list);
      })
      .catch(function(error) {
        console.log("why the fuck", error);
      });
  }

  render() {
    if (this.state.listHTML) {
      return <div id="container">{this.state.listHTML}</div>;
    } else {
      return <h1 style={{ color: "white" }}>Loading...</h1>;
    }
  }
}
