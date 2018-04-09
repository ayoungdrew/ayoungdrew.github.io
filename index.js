$(() => {
  $(".test-text, .portfolio-tile").hover(function() {
    $(this).addClass('hvr-sweep-to-top');
  });
  $(".test-text, .portfolio-tile").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
    $(this).removeClass('hvr-sweep-to-top');
  });
  $("#about-link").click(function() {
      $('html, body').animate({
          scrollTop: $("#about").offset().top
      }, 2000);
  });
})
