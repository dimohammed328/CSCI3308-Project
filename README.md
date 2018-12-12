Danish Mohammed
Jackson Roberts
Eric Weng
Nhan Nguyen
Ryan Wood
Noah Cisernos

### LyricRace
We created a trivia game that tests your knowledge of popular song lyrics.  The webpage application allows users to sign up, log in, and then select a song from a currently limited database of different songs.  Then the main game page loads, showing blanks for all the words in the song.  A box on the right side of the screen allows users to guess different words in the songs, and upon correct guesses, all instances of that word populate.  The game ends once the user enters in every unique word in the lyrics of the chosen song, or time expires.  You can also use the navigation bar to go to the leaderboard, where once again you can select a song and see the high scores for that song if applicable.

### Organization
The structure of the repo is pretty self explanatory.  Node Modules can be found in its respective folder.  The tests we ran can be found in the test folder, and the majority of the code in the src folder.  Inside this folder, most of the react components can be found in the components folder (although not all as towards the end of the project some components didn't find there way into the folder), and the css files can be found in the styles folder (although once again not all).

### Getting LyricRace Running on localhost
To get the webpage up and running:
1. Make sure you have node.js installed. (Check by typing "node -v" in terminal)
2. Navigate to CSCI3308-Project/lyricrace.
3. "npm install" in the terminal.
4. "npm start" in the terminal.

This should start the webpage on localhost:3000

This is a test of my push access

### Heroku
App can also be accessed by visiting https://lyricrace.herokuapp.com/

### Testing
To run, clone the repository, and cd into the tests folder
You may need to run pip install requests
Afterwards, simply run python3 test_endpoints.py
And the test output will display:

### Notes
There exist a couple bugs when running the game.  First when you first load into a song, you must refresh the page in order to see the blanks where the lyrics go.
Second, although not a bug, we only have lyrics available for "Who Let the Dogs Out?", "Around the World", and "All Star."  No other games are currently playable

### REACT
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

