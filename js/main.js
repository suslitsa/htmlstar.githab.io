$(function(){

  $('.top__slider').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      fade: true,
      responsive: [
        {
          breakpoint: 1209,
          settings: {
            dots: false
          }
        },
      ]
  });

  $('.reviews__slider').slick({
       arrows: false,
       dots:true,
       slidesToShow: 4,
       slidesToScroll: 1,
       responsive: [
        {
          breakpoint: 1074,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

});