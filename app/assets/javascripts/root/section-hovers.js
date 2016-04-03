$(function() {

$('.code').mouseover(function() {
  console.log('HEY')
  $('.code-category').addClass('section-hovered');
});

$('.code').mouseout(function() {
  $('.code-category').removeClass('section-hovered');
});

});
