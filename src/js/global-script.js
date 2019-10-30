$(document).ready(function() {});

$(document).ready(function() {
  $('.select-promo').selectpicker();
});

$(document).ready(function() {
  $('.slider-services').slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  });
});

$(document).ready(function() {
  $('.slider-review').slick({
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
  });
});


// $(document).ready(function() {
//   $('.slider-full').slick({
//     dots: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   });
// });

$(document).ready(function() {
  $('.slider-full-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider-full-nav',
  });
  $('.slider-full-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-full-for',
    focusOnSelect: true,
  });
});

const mq = window.matchMedia('(min-width: 1050px)');
if (mq.matches) {
    if ($('.scroll-doctors').length) {
        const perfectSideScroll = new PerfectScrollbar('.scroll-doctors', {
            wheelSpeed: 2,
            wheelPropagation: true,
            suppressScrollX: false
        });
    }
}

var flipContainer = $('.flipster'),
    flipItemContainer = flipContainer.find('.flip-items'),
    flipItem = flipContainer.find('li');

flipContainer.flipster({
  itemContainer: flipItemContainer,
  itemSelector: flipItem,
  loop: 2,
  start: 2,
  style: 'infinite-carousel',
  spacing: 0,
  // scrollwheel: true,
  //nav: 'after',
  // buttons: true
});



