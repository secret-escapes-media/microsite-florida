// general js for the project that wouldn't be a reuseable component

$('.js-open-map').on('click', function () {
  $('.js-magic-button').remove();
  $('.js-map-banner').addClass('is-open');
})

$('.js-close-map').on('click', function () {
  $('.js-map-banner').removeClass('is-open');
})

// cache buster for impression pixel
var axel = Math.random() + "";
var a = parseInt(axel * 10000000000000);
$('.js-cache-buster img').each(function() {
  var pixelSrc = $(this).attr('src');
  var newPixelSrc = pixelSrc.replace(/\[timestamp\]/g, a);
});