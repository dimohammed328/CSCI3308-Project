import React, { Component } from "react";
import SongSearch from "./SongSearch.js";
import "../styles/SongSelection.css";

export default class SongSelection extends Component {
  render() {
    return (
      <div className="songselection">
        <h1 style={{ color: "white" }}>Song Selection</h1>
        <SongSearch />
      </div>
    );
  }
}
