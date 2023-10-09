const jukeboxTheBestOf = new Jukebox("TheBestOf", 30, false);

class Jukebox {
  constructor(name, numberOfSongs = 25, shuffle = true, song) {
    this.name = name;
    this.numberOfSongs = numberOfSongs;
    this.shuffle = shuffle;
    this.song = song;
    style = styleSheet;
  }

  play(song) {
    this.song = "currentlyPlaying?";
  }
  stop() {}
  nextPrevious() {}
  songSelection(name) {
    pickUpMostPlayed25();
    {
    }
  }
  shuffle(shuffle) {}
  volume() {}
}
