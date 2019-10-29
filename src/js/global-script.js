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
    asNavFor: '.slider-full-nav'
  });
  $('.slider-full-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-full-for',
    focusOnSelect: true
  });
});

// $(document).ready(function() {
//   $('.multiple-items').slick({
//     infinite: false,
//     dots: true,
//     arrows: false,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         }
//       },
//       {
//         breakpoint: 700,
//         settings: {
//           slidesToShow: 2,
//         }
//       }
//     ]
//   });
// });
