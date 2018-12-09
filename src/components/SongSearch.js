import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/SongSearch.css";
const axios = require("axios");

export default class SongSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      songs: []
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    var list = [];
    console.log("in song selection");
    axios
      .get("https://lyricrace-backend.herokuapp.com/songselection/", {})
      .then(res => {
        // var i;
        // for (i = 0; i < res.data.rows.length; i++) {
        //   const title = res.data.rows[i].title;
        //   const artist = res.data.rows[i].artist;
        //   list.push({ artist: artist, song: title });
        // }
        // console.log(list);
        this.setState({
          songs: res.data.rows
        });
      })
      .catch(function(error) {
        console.log("why the fuck", error);
      });

    this.refs.search.focus();
  }

  onChange() {
    this.setState({
      searchString: this.refs.search.value
    });
  }

  render() {
    let songlist = this.state.songs;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      songlist = songlist.filter(function(song) {
        console.log(song);
        return (
          song.title.toLowerCase().match(search) ||
          song.artist.toLowerCase().match(search)
        );
      });
    }

    return (
      <div className="searchlist">
        <div className="searchbar">
          <input
            className="searchinput"
            type="text"
            value={this.state.searchString}
            ref="search"
            onChange={this.onChange}
            placeholder="Search by Song or Artist..."
          />
        </div>
        <div className="wrapper">
          <div className="songlist">
            {songlist.map(l => {
              return (
                <h3 className="linkwrapper" key={songlist.indexOf(l)}>
                  <Link to="/signup" className="searchlink">
                    {l.title} - {l.artist}
                  </Link>
                </h3>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
