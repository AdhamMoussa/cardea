import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class Header {
    constructor() {
        this.headerLinks = $('.header__nav-link, .header__logo');
        this.siteSections = $('.site-section');
        this.menuIcon = $('.menu-icon');
        this.headerNav = $('.header__nav');
        this.lazyImages = $('.lazyload');
        this.headerLinksSync();
        this.linksScroll();
        this.validMenuIcon();
        this.waypointsRefresh();
    }
    waypointsRefresh() {
        this.lazyImages.on('load', function () {
            Waypoint.refreshAll();
        });
    }
    headerLinksSync() {
        const that = this;
        this.siteSections.each(function () {
            let currItem = this;
            let $curr = $(this);
            new Waypoint({
                element: currItem,
                handler: function (direction) {
                    if (direction === 'down') {
                        let matching = $curr.attr('data-section');
                        that.headerLinks.removeClass('active-link');
                        $('li'+matching).addClass('active-link');
                    }
                },
                offset: '30%'
            });
            new Waypoint({
                element: currItem,
                handler: function (direction) {
                    if (direction === 'up') {
                        let matching = $curr.attr('data-section');
                        that.headerLinks.removeClass('active-link');
                        $(matching).addClass('active-link');
                    }
                },
                offset: '-50%'
            });
        });
    }
    linksScroll() {
        this.headerLinks.on('click', function () {
            let linkID = $(this).attr('id');
            let $target = $(`[data-section='#${linkID}']`);
            console.log(linkID, $target);
            $('body, html').animate({
                scrollTop: $target.offset().top - 60
            }, 700);
        });
    }
    validMenuIcon() {
        const that = this;
        this.menuIcon.on('click', function () {
            that.headerNav.toggleClass('header__nav--visible');
            that.menuIcon.toggleClass('menu-icon--animated');
        });
    }
}

export default Header;