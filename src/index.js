import Parallax from 'parallax-js';
import PageDesign from './js/page-design.js';
import Radio from './js/radio.js';

import './styles/_stylebase.scss';

import Favicon from './images/favicon.jpg';

const scene = document.getElementById('scene-1');
const parallaxInstance = new Parallax(scene);
const radio = new Radio;

PageDesign.init();

if (module.hot)        // eslint-disable-line no-undef
  module.hot.accept(); // eslint-disable-line no-undef