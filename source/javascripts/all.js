//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function() {
 $('a[href*="#"]:not([href="#"])').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     if (target.length) {
       $('html, body').animate({
         scrollTop: target.offset().top
       }, 1000);
       return false;
     }
   }
 });
 $(window).scroll(function () {
    //if you hard code, then use console
    //.log to determine when you want the
    //nav bar to stick.
    if ($(window).scrollTop() > 50) {
      $('.home-btn-hide').addClass('home-btn');
      $('.home-btn').removeClass('home-btn-hide');
    }
    if ($(window).scrollTop() < 10) {
      $('.home-btn').addClass('home-btn-hide');
      $('.home-btn-hide').removeClass('home-btn');
    }
  });
});


