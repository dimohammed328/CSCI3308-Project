import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/SongSearch.css";
const axios = require("axios");

let songs = [
  {
    artist: "Baha Men",
    song: "Who Let the Dogs Out"
  },
  {
    artist: "Brittany Spears",
    song: "Oops, I Did it Again"
  },
  {
    artist: "Bon Jovi",
    song: "It's My Life"
  },
  {
    artist: "Eminem",
    song: "Stan"
  },
  {
    artist: "Eminem",
    song: "The Real Slim Shady"
  },
  {
    artist: "Kanye West",
    song: "Gold Digger"
  },
  {
    artist: "Nelly",
    song: "Country Grammar"
  },
  {
    artist: "Outkast",
    song: "Hey Ya!"
  },
  {
    artist: "Outkast",
    song: "Ms. Jackson"
  },
  {
    artist: "Snoop Dogg",
    song: "Drop it Like it's Hot"
  },
  {
    artist: "The Black Eyed Peas",
    song: "I Gotta Feeling"
  },
  {
    artist: "The Black Eyed Peas",
    song: "Where is the Love?"
  }
];

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
    this.setState({
      songs: songs
    });
    this.refs.search.focus();
    alert("hello");

    axios
      .get("http://lyricrace-backend.herokuapp.com/songselection/", {})
      .then(res => {
        const response = res.data.rows[0].title;
        console.log(response);
      })
      .catch(function(error) {
        console.log("why the fuck", error);
      });
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
        return (
          song.song.toLowerCase().match(search) ||
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
                <h3 className="linkwrapper">
                  <Link to="/signup" className="searchlink">
                    {l.song} - {l.artist}
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
