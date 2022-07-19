(function ($) {
    "use strict";


        $('.hero_slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
        });


          //Burger
  $(".katalog").click(function (event) {
    
    $(".product").toggleClass("menu_active");
    $(".about").toggleClass("nav_active");
    $(".cosmetics").toggleClass("navbar_active");
    $("body").toggleClass("body_active");
  });

  $(".close").click(function (event) {
    
    $(".product").toggleClass("menu_active");
    $(".about").toggleClass("nav_active");
    $(".cosmetics").toggleClass("navbar_active");
    $("body").toggleClass("body_active");
  });

})

(jQuery);