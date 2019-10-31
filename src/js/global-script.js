$(document).ready(function() {});

$(document).ready(function() {
  $('.select-promo').selectpicker();
});

$(document).ready(function() {
  $('.slider-services').slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 3,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true
        }
      },
    ]
  });
});

$(document).ready(function() {
  $('.slider-review').slick({
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true
        }
      },
    ]
  });
});

$(document).ready(function(){
  $('.dropdown-submenu a.dropdown-submenu__link').on("click", function(e) {
    $(this).next('.dropdown-menu').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});

$(document).ready(function(){
  $("#dropdown-service").on("click", function(e) {
    $("#navbarSupportedContent").removeClass("collapse show");
    $("#navbarSupportedContent").addClass("collapse");
    // $("#menu-mobile").setAttribute("aria-expanded", "false");
    document.querySelector("#menu-mobile").setAttribute("aria-expanded", "false");
  })
});

$(document).ready(function() {
  $('.slider-full-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider-full-nav',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          adaptiveHeight: true
        }
      },
    ]
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

// const mq = window.matchMedia('(min-width: 1050px)');
// if (mq.matches) {
    if ($('.scroll-doctors').length) {
        const perfectSideScroll = new PerfectScrollbar('.scroll-doctors', {
            wheelSpeed: 2,
            wheelPropagation: true,
            suppressScrollX: false
        });
    }
// }

if ($('.flipster').length) {
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
    buttons: true
  });

}
