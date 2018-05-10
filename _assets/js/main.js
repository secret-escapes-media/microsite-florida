// general js for the project that wouldn't be a reuseable component

$('.js-map-hover-active').add('.map__marker').on('mouseover', function() {
  $('.js-map-banner').addClass('is-active');
})

$('.js-map-hover-active').add('.map-banner__wrap').on('mouseout', function() {
  $('.js-map-banner').removeClass('is-active');
})


$('.js-open-map').on('click', function () {
  $('.js-magic-button').remove();
  $('.js-map-banner').addClass('is-open');
})

$('.js-close-map').on('click', function () {
  $('.js-map-banner').removeClass('is-open');
})