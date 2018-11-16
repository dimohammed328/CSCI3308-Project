import React, { Component } from "react";
import SongSearch from "./SongSearch.js";
import "../styles/SongSelection.css";

export default class SongSelection extends Component {
  render() {
    return (
      <div className="songselection">
        <SongSearch />
      </div>
    );
  }
}