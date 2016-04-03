$(function() {

$('.code').mouseover(function() {
  $('.code-category').addClass('section-hovered');
});

$('.code').mouseout(function() {
  $('.code-category').removeClass('section-hovered');
});

});
