// import 'bootstrap';

$(() => {
    let scrollLink = $('.scroll')
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
    }, 600 )
    })

function adjustCollapseView(){
    var desktopView = $(document).width();
  if(desktopView >= "768"){
      $("#navbar-content a[data-toggle]").attr("data-toggle","");
      $("#navbar-content .collapse").addClass("in").css("height","auto")
  }else{
      $("#navbar-content a[data-toggle]").attr("data-toggle","collapse");
      $("#navbar-content .collapse").removeClass("in").css("height","0")
      $("#navbar-content .collapse:first").addClass("in").css("height","auto")
    }
  }

  $(function(){
    adjustCollapseView();
    $(window).on("resize", function(){
        adjustCollapseView();
    });
});
})
