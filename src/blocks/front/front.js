$('.card__button').click(function(e) {
  e.preventDefault();
  $('.socials--main').hide();
  $('.front').hide();
  $('.game').fadeIn('slow');
  timer();
});