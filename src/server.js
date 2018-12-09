const io = require('socket.io')();

var test_song_lyics = `Somebody once told me the world is gonna roll me
I ain't the sharpest tool in the shed
She was looking kind of dumb with her finger and her thumb
In the shape of an "L" on her forehead`;

// this function splits the song into words and then removes punctuation
function generate_word_list(lyrics) {
    // replace newlines with spaces
    no_punctuation_lyrics = lyrics = lyrics.replace(/(\r\n|\n|\r)/gm, ' ');

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



word_list = generate_word_list(test_song_lyics);
console.log(word_list);

io.on('connection', (client) => {

    

});