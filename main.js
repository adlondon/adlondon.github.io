// Safari CSS and Webkit Google Chrome
if ($.browser.webkit) {
   $("#element").css('top', '2px');
} else if ( $.browser.safari ) //not fully supported on 1.7 jQuery {
   $("#element").css('top', '2px');
// Opera CSS
} else if ( $.browser.opera ) {
   $("#element").css('top', '2px');
// Internet Explorer CSS
} else if ( $.browser.msie ) {
   $("#element").css('top', '2px');
// Mozilla FireFox CSS
} else if ( $.browser.mozilla ) {
   $("#element").css('top', '2px');
// Normal Revert, careful and note your the use of !important
} else {
   $("#element").css('top', '2px');
   // You can have normal JavaScript between these too
   document.getElementById("element").style.top="2px";
}


$(document).ready(function() {
  $.localScroll()
  $('nav').sticky();
});
