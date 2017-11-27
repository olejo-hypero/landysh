  $(function() {
    $('.burger-icon').on('click', function() {
      $(this).closest('.nav').toggleClass('menu_state_open');
    });
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 0,
        loop: true,
        nav:true,
        dots: false,
        autoplay:false,
        autoPlaySpeed: 4000,
        autoplayTimeout:4000,
        navText:[''],
        navText:['<i class="fa fa-angle-left" aria-hidden="true" style="font-weight:900";></i>', '<i class="fa fa-angle-right" aria-hidden="true" style="font-weight:900"></i>'],
        responsive: {
        0: {
             items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
        }
    });
  });