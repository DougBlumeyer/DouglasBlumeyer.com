$(function() {

$('.me-category').mouseover(function() {
  $('.me-category').addClass('section-hovered');

  $('.code-category').addClass('not-hovered');
  $('.vr-category').addClass('not-hovered');
  $('.music-category').addClass('not-hovered');
  $('.film-category').addClass('not-hovered');
  $('.word-category').addClass('not-hovered');
});

$('.me-category').mouseout(function() {
  $('.me-category').removeClass('section-hovered');

  $('.code-category').removeClass('not-hovered');
  $('.vr-category').removeClass('not-hovered');
  $('.music-category').removeClass('not-hovered');
  $('.film-category').removeClass('not-hovered');
  $('.word-category').removeClass('not-hovered');
});

$('.code-category').mouseover(function() {
  $('.code-category').addClass('section-hovered');

  $('.me-category').addClass('not-hovered');
  $('.vr-category').addClass('not-hovered');
  $('.music-category').addClass('not-hovered');
  $('.film-category').addClass('not-hovered');
  $('.word-category').addClass('not-hovered');
});

$('.code-category').mouseout(function() {
  $('.code-category').removeClass('section-hovered');

  $('.me-category').removeClass('not-hovered');
  $('.vr-category').removeClass('not-hovered');
  $('.music-category').removeClass('not-hovered');
  $('.film-category').removeClass('not-hovered');
  $('.word-category').removeClass('not-hovered');
});

$('.vr-category').mouseover(function() {
  $('.vr-category').addClass('section-hovered');

  $('.me-category').addClass('not-hovered');
  $('.code-category').addClass('not-hovered');
  $('.music-category').addClass('not-hovered');
  $('.film-category').addClass('not-hovered');
  $('.word-category').addClass('not-hovered');
});

$('.vr-category').mouseout(function() {
  $('.vr-category').removeClass('section-hovered');

  $('.me-category').removeClass('not-hovered');
  $('.code-category').removeClass('not-hovered');
  $('.music-category').removeClass('not-hovered');
  $('.film-category').removeClass('not-hovered');
  $('.word-category').removeClass('not-hovered');
});

$('.music-category').mouseover(function() {
  $('.music-category').addClass('section-hovered');

  $('.me-category').addClass('not-hovered');
  $('.code-category').addClass('not-hovered');
  $('.vr-category').addClass('not-hovered');
  $('.film-category').addClass('not-hovered');
  $('.word-category').addClass('not-hovered');
});

$('.music-category').mouseout(function() {
  $('.music-category').removeClass('section-hovered');

  $('.me-category').removeClass('not-hovered');
  $('.code-category').removeClass('not-hovered');
  $('.vr-category').removeClass('not-hovered');
  $('.film-category').removeClass('not-hovered');
  $('.word-category').removeClass('not-hovered');
});

$('.film-category').mouseover(function() {
  $('.film-category').addClass('section-hovered');

  $('.me-category').addClass('not-hovered');
  $('.code-category').addClass('not-hovered');
  $('.vr-category').addClass('not-hovered');
  $('.music-category').addClass('not-hovered');
  $('.word-category').addClass('not-hovered');
});

$('.film-category').mouseout(function() {
  $('.film-category').removeClass('section-hovered');

  $('.me-category').removeClass('not-hovered');
  $('.code-category').removeClass('not-hovered');
  $('.vr-category').removeClass('not-hovered');
  $('.music-category').removeClass('not-hovered');
  $('.word-category').removeClass('not-hovered');
});

$('.word-category').mouseover(function() {
  $('.word-category').addClass('section-hovered');

  $('.me-category').addClass('not-hovered');
  $('.code-category').addClass('not-hovered');
  $('.vr-category').addClass('not-hovered');
  $('.music-category').addClass('not-hovered');
  $('.film-category').addClass('not-hovered');
});

$('.word-category').mouseout(function() {
  $('.word-category').removeClass('section-hovered');

  $('.me-category').removeClass('not-hovered');
  $('.code-category').removeClass('not-hovered');
  $('.vr-category').removeClass('not-hovered');
  $('.music-category').removeClass('not-hovered');
  $('.film-category').removeClass('not-hovered');
});

});
