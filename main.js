
$(document).ready(function() {
  $('.scroll').localScroll()
  $('nav').sticky();
  //help with hamburger menu
  //http://www.internetkultur.at/simple-hamburger-drop-down-menu-with-css-and-jquery/
  $('.menu-button').on('click', function () {
    $('.responsive-menu').slideToggle();
    $('.menu-button span').toggleClass('menu-color')
  });
  $('.li-res').on('click', function () {
    $('.responsive-menu').slideToggle();
    $('.menu-button span').toggleClass('menu-color')
  });
});
