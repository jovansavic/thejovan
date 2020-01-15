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
  tooltip: function() {
    $('.site-header a[data-title]').hover(function() {
      const $tooltip = `<aside class="tooltip">${$(this).attr('data-title')}</aside>`;
      $(this).append($tooltip);
    }, function() {
      $(this).find('.tooltip').remove();
    });

  },
  init: function() {
    this.cloneMenu();
    this.toggleMobileMenu();
    if ($(window).width() > 800 ) this.tooltip();
  },
};

$(window).on('load', function() {
  Header.init();
});
