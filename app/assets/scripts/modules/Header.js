import $ from 'jquery';
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
    }
    headerLinksSync() {
        this.siteSections.each(function () {
            if ($(this).offset().top - 300 < $(window).scrollTop()) {
                let $targetLinkID = $(this).attr('da-section');
                $($targetLinkID).addClass('active-link').siblings().removeClass('active-link');
            }
        });
    }
    linksScroll() {
        this.headerLinks.on('click', function () {
            let linkID = $(this).attr('id');
            let $target = $(`[data-section='#${linkID}']`);
            $('body, html').animate({
                scrollTop: ($target.offset().top - 60)
            }, 700, 'linear', function () {
                Waypoint.refreshAll();
            });
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