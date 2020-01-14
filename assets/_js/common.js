import $ from 'jquery';

const Header = {
  cloneMenu: function() {

    const $firstNav = $('.first-nav').clone(true);
    const $secondNav = $('.second-nav').clone(true);

    $('#mobile-menu, .menu-items').append($firstNav);
    $('#mobile-menu, .menu-items').append($secondNav);
  },
  toggleMobileMenu: function() {
    $('#menu-toggle').on('click', function() {
      $(this).toggleClass('open');
      $('#mobile-menu').toggleClass('open');

    });
  },
  init: function() {
    this.cloneMenu();
    this.toggleMobileMenu();
  },
};

$(window).on('load', function() {
  Header.init();
});
