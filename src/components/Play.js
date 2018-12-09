import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import bcrypt from "bcrypt-nodejs";
import { Redirect } from "react-router-dom";
import $ from 'jquery';
import "../styles/Play.css";
import songs from '../songs.js';
const axios = require("axios");

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.word_list = {};
        this.found_words = [];
    }

    handleClick = (event) => {
        var word = $('#songguess').val();
        if (word.slice(-1) == ' ') {
            word = word.substr(0, word.length - 1);
            word = word.replace(/[^\w\s]/gi, '');
            word = word.toLowerCase();
            console.log(word);
            var word_list = this.word_list;
            var np = word_list['np_lyrics'];
            var word_found = false;
            var found_word = '';
            for (var i = 0; i < np.length; i++) {
                if (word == np[i]) {
                    if (this.found_words.indexOf(word) < 0) {
                        word_found = true;
                        console.log('ding!');
                        this.found_words.push(word);
                        console.log(this.found_words);
                        found_word = word;
                        break;
                    }
                }
            }
            if (word_found) {
                for (var i = 0; i < np.length; i++) {
                    if (np[i] == found_word) {
                        $('#word-' + i).css('color', 'white');
                    }
                }
                this.wordsleft -= 1;
                $('#wordsleft').html(this.wordsleft);
                $('#songguess').val('');
                if (this.wordsleft == 0) {
                    alert('You win!');
                    window.location.href = '/songselection';
                }
            }
        }
    }
    render() {

        // this function splits the song into words and then removes punctuation
        function generate_word_list(lyrics) {
            // replace newlines with spaces
            var no_punctuation_lyrics = lyrics = lyrics.replace(/\n\s*\n/g, '\n');
            no_punctuation_lyrics = lyrics = lyrics.replace(/(\r\n|\n|\r)/gm, '<<<<');
            no_punctuation_lyrics = no_punctuation_lyrics.replace('<<<<', '');
            no_punctuation_lyrics = no_punctuation_lyrics.replace(/\s+/g, ' ');
            lyrics = lyrics.replace(/\s+/g, ' ');

            // remove punctuation characters (except spaces) from no_punctuation_lyrics. this is what user input is matched against
            no_punctuation_lyrics = no_punctuation_lyrics.replace(/[^\w\s]/gi, '');
            no_punctuation_lyrics = no_punctuation_lyrics.toLowerCase();


            no_punctuation_lyrics = no_punctuation_lyrics.split(' ');
            lyrics = lyrics.split(' ');
            return {
                'lyrics': lyrics,
                'np_lyrics': no_punctuation_lyrics
            }
        }

        /* How displaying songs and handing user input will work:
        1. Display song using lyrics array. Loop through and create a separate span element for each word.
        2. When user types input, convert word to lower case, and match it against np_lyrics.
        3. If found in that array, then the index of that word will be passed back to the client.
        4. Color the appropriate word on the client using that index.
        */

        var url = window.location.href;
        var id = url.split('#')[1];
        var song_lyrics = songs[id]['lyrics'];
        this.word_list = generate_word_list(song_lyrics);
        var word_list = this.word_list;
        console.log(word_list);

        var seen_words = [];
        var unique_word_count = 0;
        for (var i = 0; i < word_list['np_lyrics'].length; i++) {
            var word = word_list['np_lyrics'][i];
            if (seen_words.indexOf(word) == -1) {
                console.log('newword ' + word);
                seen_words.push(word);
                unique_word_count += 1;
            }
        }
        console.log(unique_word_count + ' UNIQUE WORDS');
        var starting_time = unique_word_count * 3;
        var time_left = starting_time;
        this.wordsleft = unique_word_count;



        document.addEventListener('DOMContentLoaded', () => {
            $('#timeleft').html(starting_time);
            $('#wordsleft').html(this.wordsleft);

            setInterval(function() {
                time_left -= 1;
                $('#timeleft').html(time_left);

                if (time_left <= 0) {
                    alert('You lose!');
                    window.location.reload();
                }
            }, 1000);

            let elements = []
            let container = document.querySelector('#container');
            for (var i = 0; i < word_list['lyrics'].length; i++) {
                var word = word_list['lyrics'][i];
                if (word.slice(-4) == "<<<<") {

                    $('#song').append('<span id="word-' + i + '" class="word">' + word.substr(0, word.length - 4) + '</span> <br>');
                } else {
                    $('#song').append('<span id="word-' + i + '" class="word">' + word + '</span> ');
                }
            }
        })




        return (
            <div id="container">
                <div id="leftcol">
                    <p id="song">

                    </p>
                </div>
                <div id="rightcol">
                    <div id="inputbox">
                        Guess words here:
                        <input onChange={this.handleClick} id="songguess" type="text"></input>
                        <br></br>
                        <br></br>
                        Time left: <span id="timeleft"></span><br></br>
                        Unique words left: <span id="wordsleft"></span><br></br><br></br>
                        <p class="ll">Hint: if you're stuck on a word, try highlighting the blank and copying that text somewhere.</p>
                    </div>
                </div>
            </div>
        );
    }
}
