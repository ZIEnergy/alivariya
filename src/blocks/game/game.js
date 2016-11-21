$('.game__ingredient').click(function(e) {
  e.preventDefault();
  $(this).addClass('game__ingredient--active');
  $(this).unbind('click');
  $('.game-popup__picture').attr('src', 'img/' + $(this).data('picture'));
  $('.game-popup__header').text($(this).data('header'));
  $('.game-popup__text--ingredient').text($(this).data('text'));
  $('.game-popup--ingredient').fadeIn('slow').css('display', 'flex');
//  setTimeout(function () {
//    $('.game-popup--ingredient').fadeIn('slow').css('display', 'flex');
//  }, 1500)
});

$('.game__ingredient--correct').click(function(e) {
  e.preventDefault();
//  flyToElement($(this), $('.slots__item--empty').first());
//  setTimeout(function () {
//    $('.slots__item--empty').first().addClass($(this).data('slot')).removeClass('slots__item--empty');
//  }, 1500);
  $('.slots__item--empty').first().addClass($(this).data('slot')).removeClass('slots__item--empty');
  $('.game-popup').removeClass('game-popup--incorrect');
  $('.game-popup').addClass('game-popup--correct');
});

$('.game__ingredient--incorrect').click(function(e) {
  e.preventDefault();
  $('.game-popup').removeClass('game-popup--correct');
  $('.game-popup').addClass('game-popup--incorrect');
});

//function minute() {
//  if (time.substring(time.length-1) == "1") {
//    $('.win__result-text--minute').text('хвiлiну');
//  }
//  else if (time.substring(time.length-1) == "2"||time.substring(time.length-1) == "3"||time.substring(time.length-1) == "4") {
//    $('.win__result-text--minute').text('хвiлiны');
//  }
//  else {
//    $('.win__result-text--minute').text('хвiлiн');
//  };
//}

$('.game-popup__close').click(function(e) {
  e.preventDefault();
  $('.game-popup').fadeOut('slow');
  if(!$('.slots__item').hasClass("slots__item--empty")) {
    $('.message').fadeIn('slow');
    if($('.game__location--third').is(':visible')) {
      $('.game').hide();
      $('.win__result-number').text(time);
//      minute();
      $('.win').fadeIn('slow').css('display', 'flex');
      $('.win').snowfall({image :"img/snowflake.png", minSize: 10, maxSize: 28, flakeCount : 30, maxSpeed : 10});
    };
  };
});

$('.message__close').click(function(e) {
  e.preventDefault();
  $('.message').hide();
  $('.game').addClass('game--blocked');
  $('.slots__item').removeClass().addClass('slots__item').addClass('slots__item--empty');
});

$('.message__close--library').click(function(e) {
  e.preventDefault();
  $(this).parents('.game__location').hide();
  $('.question').snowfall('clear');
  $('.game__location--second').fadeIn('slow');
});

$('.message__close--factory').click(function(e) {
  e.preventDefault();
  $(this).parents('.game__location').hide();
  $('.game__location--third').fadeIn('slow');
});