(function($) { 
"use strict";

/* ================ Nav ================ */
$('[data-toggle="offcanvas"]').on('click', function () {
    $('.navbar-collapse').toggleClass('show');
    });

/* ================ Close Sidebar ================ */
    $('.fa-caret-down').on("click", function(e) {
        e.preventDefault();
        $(this).next().slideToggle('');
    });
 

//Accordion Box
  if($('.accordion-box').length){
    $(".accordion-box").on('click', '.acc-btn', function() {
      
      var outerBox = $(this).parents('.accordion-box');
      var target = $(this).parents('.accordion');
      
      if($(this).hasClass('active')!==true){
        $(outerBox).find('.accordion .acc-btn').removeClass('active');
      }
      
      if ($(this).next('.acc-content').is(':visible')){
        return false;
      }else{
        $(this).addClass('active');
        $(outerBox).children('.accordion').removeClass('active-block');
        $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
        target.addClass('active-block');
        $(this).next('.acc-content').slideDown(300);  
      }
    }); 
  }
 

/*MAGNIFIC POPUP JS*/

    $('.video-play').magnificPopup({
        type: 'iframe'
    });
    var magnifPopup = function() {
        $('.work-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function(openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };



/* ================ Portfolio Carousel ================ */
if($('.portfolio-carousel').length){
    $('.portfolio-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        items: 1,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
    });
}

})(jQuery);
