$('.game__ingredient').click(function(e) {
  e.preventDefault();
  $('.game-popup__picture').attr('src', 'img/' + $(this).data('picture'));
  $('.game-popup__header').text($(this).data('header'));
  $('.game-popup__text--ingredient').text($(this).data('text'));
  $('.game-popup--ingredient').fadeIn('fast').css('display', 'flex');
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
    $('.message').fadeIn('fast');
    $('.slots__item').removeClass().addClass('slots__item').addClass('slots__item--empty');
    if($('.game__location--third').is(':visible')) {
      $('.game').hide();
      $('.win').fadeIn('fast').css('display', 'flex');
    };
  };
});

$('.message__close').click(function() {
  $('.message').hide();
});

$('.message__close--library').click(function() {
  $(this).parents('.game__location').hide();
  $('.game__location--second').fadeIn('fast');
});

$('.message__close--factory').click(function() {
  $(this).parents('.game__location').hide();
  $('.game__location--third').fadeIn('fast');
});