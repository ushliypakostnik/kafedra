import Parallax from 'parallax-js';
import PageDesign from './js/page-design';
import Radio from './js/radio';

import './styles/_stylebase.scss';

import Favicon from './images/favicon.jpg'; // eslint-disable-line no-unused-vars

const scene = document.getElementById('scene-1');
const parallaxInstance = new Parallax(scene); // eslint-disable-line no-unused-vars
const radio = new Radio(); // eslint-disable-line no-unused-vars

PageDesign.init();

if (module.hot) {
  module.hot.accept();
}
