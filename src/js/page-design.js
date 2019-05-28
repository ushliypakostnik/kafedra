import path from 'path';
import Logger from './logger';
import ScreenHelper from './screen-helper';

let logger = new Logger(path.basename(__filename, '.js'));

const PageDesign = (() => {
  const NAME = 'PageDesign';

  const scene1 = document.getElementById("scene-1");
  const scene2 = document.getElementById("scene-2");
  const background = document.getElementById("background");
  const radio = document.getElementById("radio");
  let height;

  const getHeight = (el) => {
    return Number(window.getComputedStyle(el, null).getPropertyValue("height").slice(0, -2));
  }

  const checkScroll = (scroll) => {
    if (ScreenHelper.isDesktop()) {
      background.style.top = (-0.75 * (scroll - 10)) + 'px';

      if (scroll > height - 300) {
        radio.classList.add("riseUp");
        radio.classList.remove("riseDown");
      } else {
        radio.classList.remove("riseUp");
        radio.classList.add("riseDown");
      }
    } else {
      radio.classList.remove("riseUp");
      radio.classList.remove("riseDown");
    }
  }

  const redraw = () => {
    logger.info('redraw');

    if (ScreenHelper.isDesktop()) {
      height = getHeight(scene1);
      if (height > 700)  {
        radio.style.height = (height - 60) * 0.6 + 'px';
      } else {
        radio.style.height = (height - 60) * 0.5 + 'px';
      }
    } else {
      radio.style.height = "";
    }

    checkScroll(onscroll());
  }

  const onscroll = () => {
    let scroll = window.pageYOffset || document.documentElement.scrollTop;

    checkScroll(scroll);

    return scroll;
  }

  const init = () => {
    logger.info('init');

    window.addEventListener('resize', () => redraw());
    window.addEventListener("scroll", () => onscroll());

    redraw();
  };

  return {
    init,
    redraw,
    onscroll
  };
})();

export default PageDesign;