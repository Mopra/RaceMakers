$(document).ready(function(){

    $('.contactmodal').modal();
    $('.tooltipped').tooltip();
    $('.scrollspy').scrollSpy();

    $('.carousel.carousel-slider').carousel({
        fullWidth: 'true',
        indicators: 'true',
        duration: 300
    });
    setTimeout(autoplay, 4500);
    function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 4500);
    }


    $('.sidenav').sidenav({
        menuWidth:300,
        edge: 'right'
    });


  $('#mousewheel').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
    });
    
    $(".load-animate").addClass("loaded");  
    
});