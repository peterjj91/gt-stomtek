$(document).ready(function() {
  $('.select-promo').selectpicker();
});

$(document).ready(function() {
  $('#dropdown-service').on('click', function(e) {
    $('#navbarSupportedContent').removeClass('collapse show');
    $('#navbarSupportedContent').addClass('collapse');
    document
      .querySelector('#menu-mobile')
      .setAttribute('aria-expanded', 'false');
  });
});

$(document).ready(function() {
  $('#menu-mobile').on('click', function(e) {
    $('#collapseExample').removeClass('collapse show');
    $('#collapseExample').addClass('collapse');
    document
      .querySelector('#dropdown-service')
      .setAttribute('aria-expanded', 'false');
  });
});

$(document).ready(function() {
  $('.service-item__expand').on('click', function(e) {
    $(this)
      .parent()
      .toggleClass('service-item--active');
  });
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
          adaptiveHeight: true,
        },
      },
    ],
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

const mq = window.matchMedia('(min-width: 1200px)');
if (mq.matches) {
  console.log('if', mq.matches);
  if ($('.scroll-doctors').length) {
    const perfectSideScroll = new PerfectScrollbar('.scroll-doctors', {
      wheelSpeed: 2,
      wheelPropagation: true,
      suppressScrollX: false,
    });
  }
} else {
  console.log('else', mq.matches);
  $(document).ready(function() {
    $('#slider-specialist').addClass('slider');
    $('#slider-specialist').slick({
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            adaptiveHeight: true,
          },
        },
      ],
    });
  });
}

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
    buttons: true,
  });
}

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
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
          adaptiveHeight: true,
        },
      },
    ],
  });
});
