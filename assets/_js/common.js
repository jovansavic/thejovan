import $ from 'jquery';

const Header = {
  cloneForMobile: function() {
    if ( $( window ).width() > 800 ) return false;

    const $firstNav = $('.first-nav').clone(true);
    const $secondNav = $('.second-nav').clone(true);

    $('#mobile-menu').append($firstNav);
    $('#mobile-menu').append($secondNav);
  },
  toggleMobileMenu: function() {
    $('#menu-toggle').on('click', function() {
      $(this).toggleClass('open');
      $('#mobile-menu').toggleClass('open');

    });
  },
  init: function() {
    this.cloneForMobile();
    this.toggleMobileMenu();
  },
};

$(window).on('load', function() {
  Header.init();
});
