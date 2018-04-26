import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(item, offset) {
        this.itemToReveal = $(item);
        this.offset = offset;
        this.hideInitially();
        this.revealIt();
    }
    hideInitially() {
        this.itemToReveal.addClass('reveal-item');
    }
    revealIt() {
        let obj = this;
        this.itemToReveal.each(function () {
            let currItem = this;
            new Waypoint({
                element: currItem,
                handler: function () {
                    $(currItem).addClass('reveal-item--visible');
                },
                offset: obj.offset
            });
        });
    }
}

export default RevealOnScroll;