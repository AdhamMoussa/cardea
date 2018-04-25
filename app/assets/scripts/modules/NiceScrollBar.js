import $ from 'jquery';
import niceScroll from 'jquery.nicescroll';

class NiceScrollBar {
  constructor() {
    this.theBody = $('body');
    this.init();
  }
  init() {
    this.theBody.niceScroll({
      cursorcolor: '#222',
      cursorwidth: '10px',
      cursorborder: 0,
      scrollspeed: 50,
      cursorminheight: 100
    });
  }
}

export default NiceScrollBar;