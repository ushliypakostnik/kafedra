class Radio {
    constructor() {
        console.log(111);
        this._initRadio();
    }

    play() {}
    next() {}

    _initRadio() {
        console.log(222);
        this._getSongsList().then((result) => {
            console.log(333);
            var html = '<div class="radio">' + this._parseTracks(result.tracks) + '</div>';
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
        var html = [];

        html.push('<div class="radio__list">');
        tracks.forEach(v => html.push('<a href="' + v.href + '" target="_blank">' + v.title + '</a>'));
        html.push('</div>');

        return html.join('');
    }
}

export default Radio;