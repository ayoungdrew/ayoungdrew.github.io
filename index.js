$(() => {
    let scrollLink = $('.scroll')
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
      //
        scrollTop: $(this.hash).offset().top
      //
    }, 600 )
    })
    // $("#about").click(function(event) {
    //   event.preventDefault();
    //   $("html, body").animate({
    //     scrollTop: $($(this).attr("href")).offset().top
    //   }, 500);
})
