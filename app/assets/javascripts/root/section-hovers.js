$(function() {

$('.me').mouseover(function() {
  $('.me-category').addClass('section-hovered');

  $('.code-category').addClass('not-hovered');
  $('.vr-category').addClass('not-hovered');
  $('.music-category').addClass('not-hovered');
  $('.film-category').addClass('not-hovered');
  $('.word-category').addClass('not-hovered');
});

$('.me').mouseout(function() {
  $('.me-category').removeClass('section-hovered');

  $('.code-category').removeClass('not-hovered');
  $('.vr-category').removeClass('not-hovered');
  $('.music-category').removeClass('not-hovered');
  $('.film-category').removeClass('not-hovered');
  $('.word-category').removeClass('not-hovered');
});

$('.code').mouseover(function() {
  $('.code-category').addClass('section-hovered');

  $('.me-category').addClass('not-hovered');
  $('.vr-category').addClass('not-hovered');
  $('.music-category').addClass('not-hovered');
  $('.film-category').addClass('not-hovered');
  $('.word-category').addClass('not-hovered');
});

$('.code').mouseout(function() {
  $('.code-category').removeClass('section-hovered');

  $('.me-category').removeClass('not-hovered');
  $('.vr-category').removeClass('not-hovered');
  $('.music-category').removeClass('not-hovered');
  $('.film-category').removeClass('not-hovered');
  $('.word-category').removeClass('not-hovered');
});

$('.vr').mouseover(function() {
  $('.vr-category').addClass('section-hovered');

  $('.me-category').addClass('not-hovered');
  $('.code-category').addClass('not-hovered');
  $('.music-category').addClass('not-hovered');
  $('.film-category').addClass('not-hovered');
  $('.word-category').addClass('not-hovered');
});

$('.vr').mouseout(function() {
  $('.vr-category').removeClass('section-hovered');

  $('.me-category').removeClass('not-hovered');
  $('.code-category').removeClass('not-hovered');
  $('.music-category').removeClass('not-hovered');
  $('.film-category').removeClass('not-hovered');
  $('.word-category').removeClass('not-hovered');
});

$('.music').mouseover(function() {
  $('.music-category').addClass('section-hovered');

  $('.me-category').addClass('not-hovered');
  $('.code-category').addClass('not-hovered');
  $('.vr-category').addClass('not-hovered');
  $('.film-category').addClass('not-hovered');
  $('.word-category').addClass('not-hovered');
});

$('.music').mouseout(function() {
  $('.music-category').removeClass('section-hovered');

  $('.me-category').removeClass('not-hovered');
  $('.code-category').removeClass('not-hovered');
  $('.vr-category').removeClass('not-hovered');
  $('.film-category').removeClass('not-hovered');
  $('.word-category').removeClass('not-hovered');
});

$('.film').mouseover(function() {
  $('.film-category').addClass('section-hovered');

  $('.me-category').addClass('not-hovered');
  $('.code-category').addClass('not-hovered');
  $('.vr-category').addClass('not-hovered');
  $('.music-category').addClass('not-hovered');
  $('.word-category').addClass('not-hovered');
});

$('.film').mouseout(function() {
  $('.film-category').removeClass('section-hovered');

  $('.me-category').removeClass('not-hovered');
  $('.code-category').removeClass('not-hovered');
  $('.vr-category').removeClass('not-hovered');
  $('.music-category').removeClass('not-hovered');
  $('.word-category').removeClass('not-hovered');
});

$('.word').mouseover(function() {
  $('.word-category').addClass('section-hovered');

  $('.me-category').addClass('not-hovered');
  $('.code-category').addClass('not-hovered');
  $('.vr-category').addClass('not-hovered');
  $('.music-category').addClass('not-hovered');
  $('.film-category').addClass('not-hovered');
});

$('.word').mouseout(function() {
  $('.word-category').removeClass('section-hovered');

  $('.me-category').removeClass('not-hovered');
  $('.code-category').removeClass('not-hovered');
  $('.vr-category').removeClass('not-hovered');
  $('.music-category').removeClass('not-hovered');
  $('.film-category').removeClass('not-hovered');
});

});
