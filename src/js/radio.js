class Radio {
  constructor() {
    this._initRadio();
  }

  play() {
    // or stop
  }
  next() {}

  _buildPlaylist() {
    // randomly
  }

  _initRadio() {
    console.log(222);
    this._getSongsList().then((result) => {
      console.log(333);
      var html = '<div class="radio">' + this._parseTracks(result.songs) + '</div>';
      console.log(12, html);
      console.log(13, Howl, Howler, HowlerGlobal);
    });
  }
  _getSongsList() {
    return fetch('/audio/songs.json').then((response) => {
      console.log(21, response);
      return response.json();
    }).catch((err) => {
      console.error('something gone wrong with request', err);
    });
  }
  _parseTracks(tracks) {
    // tracks is ({ title: String, url: String, album: String, year: Number })[]
    var html = [];

    html.push('<div class="radio__list">');
    tracks.forEach(v => html.push('<a href="' + v.url + '" target="_blank">' + v.title + '</a>'));
    html.push('</div>');

    return html.join('');
  }
}

export default Radio;
