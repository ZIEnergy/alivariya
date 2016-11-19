$('.card__button').click(function(e) {
  e.preventDefault();
  $('.front').hide();
  $('.game').fadeIn('fast');
  timer();
});