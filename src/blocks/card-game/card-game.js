$('.card-game__button').click(function(e) {
  e.preventDefault();
  $(this).parents('.card-game').fadeOut('fast');
});