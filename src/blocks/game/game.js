$('.game__ingredient').click(function(e) {
  e.preventDefault();
  $('.game-popup__picture').attr('src', 'img/' + $(this).data('picture'));
  $('.game-popup__header').text($(this).data('header'));
  $('.game-popup__text').text($(this).data('text'));
  $('.game-popup').fadeIn('fast').css('display', 'flex');
});

$('.game__ingredient--correct').click(function(e) {
  e.preventDefault();
  $('.game-popup__status').removeClass('game-popup__status--minus');
  $('.game-popup__status').addClass('game-popup__status--key');
});

$('.game__ingredient--incorrect').click(function(e) {
  e.preventDefault();
  $('.game-popup__status').removeClass('game-popup__status--key');
  $('.game-popup__status').addClass('game-popup__status--minus');
});

$('.game-popup__close').click(function(e) {
  e.preventDefault();
  $('.game-popup').fadeOut('fast');
});