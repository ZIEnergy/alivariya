$('.card-game__button').click(function(e) {
  e.preventDefault();
  $(this).parents('.card-game').fadeOut('slow');
  $('.game').removeClass('game--blocked');
});