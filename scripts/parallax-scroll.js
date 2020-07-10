$(function() {
  var $parallaxBg=$('.know');
  $(window).on('scroll', function() {
    var scroll=$('document').scrollTop();

    $parallaxBg.css({
      'background-position':'50% ' +(-.4*scroll)+'px'
    });
  });
});

let lorem = "Poll Castillo";
const PI = 3.1416;
document.getElementById("userName").innerHTML = lorem;