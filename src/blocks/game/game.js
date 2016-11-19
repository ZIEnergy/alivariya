$('.game__ingredient').click(function(e) {
  e.preventDefault();
  $('.game-popup__picture').attr('src', 'img/' + $(this).data('picture'));
  $('.game-popup__header').text($(this).data('header'));
  $('.game-popup__text').text($(this).data('text'));
  $('.game-popup').fadeIn('fast').css('display', 'flex');
  if(!$('.slots__item').hasClass("slots__item--empty")) {
    $(this).parents('.game__location').hide();
  }
});

$('.game__ingredient--correct').click(function(e) {
  e.preventDefault();
  $('.slots__item--empty').first().addClass($(this).data('slot')).removeClass('slots__item--empty');
  $('.game-popup__status').removeClass('game-popup__status--minus');
  $('.game-popup__status').addClass('game-popup__status--key');
  $('.game-popup__picture').removeClass('game-popup__picture--incorrect');
  $('.game-popup__picture').addClass('game-popup__picture--correct');
});

$('.game__ingredient--incorrect').click(function(e) {
  e.preventDefault();
  $('.game-popup__status').removeClass('game-popup__status--key');
  $('.game-popup__status').addClass('game-popup__status--minus');
  $('.game-popup__picture').removeClass('game-popup__picture--correct');
  $('.game-popup__picture').addClass('game-popup__picture--incorrect');
});

$('.game-popup__close').click(function(e) {
  e.preventDefault();
  $('.game-popup').fadeOut('fast');
  if(!$('.slots__item').hasClass("slots__item--empty")) {
    $('.game__location--visible').hide();
    $('.game__location--hidden').first().fadeIn('fast').addClass('game__location--visible');
    $('.slots__item').removeClass().addClass('slots__item').addClass('slots__item--empty');
  }
});