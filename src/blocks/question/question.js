$('.question__button--yes').click(function(e) {
  e.preventDefault();
  $('.question').hide();
  $('.front').fadeIn('slow');
});