// general js for the project that wouldn't be a reuseable component

$('.js-open-map').on('click', function () {
  $('.js-magic-button').remove();
  $('.js-map-banner').addClass('is-open');
})

$('.js-close-map').on('click', function () {
  $('.js-map-banner').removeClass('is-open');
})