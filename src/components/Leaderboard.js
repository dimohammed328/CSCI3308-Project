import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import bcrypt from "bcrypt-nodejs";
import { Redirect } from "react-router-dom";
import "../styles/Leaderboard.css";
const axios = require("axios");

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = { songID: this.props.match.params.id };
  }

  componentDidMount() {
    var list = [];
    var that = this;
    axios
      .get(
        `https://lyricrace-backend.herokuapp.com/leaderboard/${
          this.state.songID
        }`
      )
      .then(res => {
        that.setState({
          list: res.data.rows.sort((a, b) => a.timesec - b.timesec)
        });
        that.state.list.forEach((item, index) => {
          item.key = index;
        });
        that.setState({
          listHTML: that.state.list.map(item => (
            <div key={item.key} className="row">
              <div className="name">{item.username}</div>
              <div classname="score">{item.timesec}</div>
            </div>
          ))
        });
      })
      .catch(function(error) {
        console.log("why the fuck", error);
      });
  }

  render() {
    if (this.state.listHTML && this.state.listHTML.length > 0) {
      return <div id="container">{this.state.listHTML}</div>;
    } else if (this.state.listHTML && this.state.listHTML.length == 0) {
      return <h1 style={{ color: "white" }}>No scores found for this song</h1>;
    } else {
      console.log("here2");
      return <h1 style={{ color: "white" }}>Loading...</h1>;
    }
  }
}
