$(document).ready(function(e) {

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 300) {
    $('.button-top').fadeIn(300);
  } else {
    $('.button-top').fadeOut(300);
  }
});

$('.menu-list a, .header-wrap a').click(function(){
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
     $('html, body').animate({
         scrollTop: destination
     }, 500);
 });




});




