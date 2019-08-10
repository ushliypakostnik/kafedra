import './styles/_stylebase.scss';
import './images/favicon.jpg'; // eslint-disable-line no-unused-vars

import Parallax from 'parallax-js';
import PageDesign from './js/page-design';
import Radio from './js/radio';

const scene = document.getElementById('scene-1');
const parallaxInstance = new Parallax(scene); // eslint-disable-line no-unused-vars
const radio = new Radio({ // eslint-disable-line no-unused-vars
  songsUrl: '/audio/songs.json',
  playerClassName: 'player',
  btnPlay: '.btn--play',
  btnPause: '.btn--pause',
  btnNext: '.btn--next',
});

PageDesign.init();

if (module.hot) {
  module.hot.accept();
}
