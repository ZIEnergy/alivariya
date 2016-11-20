$('.question__button--yes').click(function(e) {
  e.preventDefault();
  $('.question').snowfall('clear');
  $('.question').hide();
  $('.front').fadeIn('slow');
});