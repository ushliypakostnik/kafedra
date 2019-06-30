class Radio {
  constructor() {
    this.initRadio();
  }

  // https://eslint.org/docs/rules/class-methods-use-this
  // eslint-disable-next-line class-methods-use-this
  play() {}

  // eslint-disable-next-line class-methods-use-this
  next() {
  }

  // eslint-disable-next-line class-methods-use-this
  buildPlaylist() {
    // randomly
  }

  initRadio() {
    console.log(222);
    this.getSongsList().then((result) => {
      console.log(333);
      const html = `<div class="radio">${this.parseTracks(result.songs)}</div>`;
      console.log(12, html);
      // eslint-disable-next-line no-undef
      console.log(13, Howl, Howler, HowlerGlobal); // Howl, Howler, HowlerGlobal is not defined ???
    });
  }

  // eslint-disable-next-line class-methods-use-this
  getSongsList() {
    // eslint-disable-next-line no-undef
    return fetch('/audio/songs.json').then((response) => {
      console.log(21, response);
      return response.json();
    }).catch((err) => {
      console.error('something gone wrong with request', err);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  parseTracks(tracks) {
    // tracks is ({ title: String, url: String, album: String, year: Number })[]
    const html = [];

    html.push('<div class="radio__list">');
    tracks.forEach(v => html.push(`<a href="${v.url}" target="_blank">${v.title}</a>`));
    html.push('</div>');

    return html.join('');
  }
}

export default Radio;
