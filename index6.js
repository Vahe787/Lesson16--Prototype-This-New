function Playlist() {
  this.current = 0;
  this.songs = [];
  this.add = function (song) {
    this.songs = [...this.songs, song];
  };
  this.play = function () {
    return `${this.songs[this.current].name} started to play`;
  };
  this.next = function () {
    if (this.current === this.songs.length - 1) {
      this.current = 0;
      return `${this.songs[0].name} started to play`;
    }
    this.current++;
    return `${this.songs[this.current].name} started to play`;
  };
  this.stop = function () {
    return `${this.songs[this.current].name} stopped`;
  };
}

function Song(songName, name) {
  this.name = name;
  this.songName = songName;
}

const playlist = new Playlist();
const song1 = new Song("Hey Jude", "The Beatles");
const song2 = new Song("Jaded", "Aerosmith");

playlist.add(song1);
playlist.add(song2);

console.log(playlist.play());
console.log(playlist.next());
console.log(playlist.stop());
console.log(playlist.play());
console.log(playlist.next());
console.log(playlist.stop());
console.log(playlist.play());
