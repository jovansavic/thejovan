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
  themeSwitch: function() {
    const theme = localStorage.hasOwnProperty('theme') ? localStorage.theme : 'light';
    const checked = theme == 'dark';
    $('#theme-switch-checkbox').prop('checked', checked);
    $('body').addClass(theme);

    localStorage.setItem('theme', theme);

    $('#theme-switch-checkbox').on('change', function() {
      const newTheme = $(this).is(':checked') ? 'dark' : 'light';

      $('body').addClass(newTheme);
      $('body').removeClass(localStorage.theme);

      localStorage.setItem('theme', newTheme);
    });

  },
  init: function() {
    this.themeSwitch();
    this.cloneMenu();
    this.toggleMobileMenu();
    if ($(window).width() > 800 ) this.tooltip();
  },
};

$(document).ready( function() {
  Header.init();
});
