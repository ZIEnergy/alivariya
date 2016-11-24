$('.game__ingredient').click(function(e) {
  e.preventDefault();
  $(this).addClass('game__ingredient--active');
  $(this).unbind('click');
  $('.game-popup__picture').attr('src', 'img/' + $(this).data('picture'));
  $('.game-popup__header').text($(this).data('header'));
  $('.game-popup__text--ingredient').text($(this).data('text'));
  window.scrollTo(0, 0);
  $('.game-popup--ingredient').fadeIn('slow').css('display', 'flex');
});

$('.game__ingredient--correct').click(function(e) {
  e.preventDefault();
  $('.slots__item--empty').first().addClass($(this).data('slot')).removeClass('slots__item--empty');
  $('.game-popup').removeClass('game-popup--incorrect');
  $('.game-popup').addClass('game-popup--correct');
});

$('.game__ingredient--incorrect').click(function(e) {
  e.preventDefault();
  $('.game-popup').removeClass('game-popup--correct');
  $('.game-popup').addClass('game-popup--incorrect');
});

$('.game-popup__close').click(function(e) {
  e.preventDefault();
  $('.game-popup').fadeOut('slow');
  if(!$('.slots__item').hasClass("slots__item--empty")) {
    window.scrollTo(0, 0);
    $('.message').fadeIn('slow');
    if($('.game__location--third').is(':visible')) {
      localStorage.setItem("gameTime",time);
      window.location.href = "win.html";
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
  $('.game__location--second').fadeIn('slow');
});

$('.message__close--factory').click(function(e) {
  e.preventDefault();
  $(this).parents('.game__location').hide();

  if ($(window).width() < 900) {
    $('.game__location--third').snowfall({image :"img/snowflake.png", minSize: 5, maxSize: 15, flakeCount : 10, maxSpeed : 5});
  }
  else {
    $('.game__location--third').snowfall({image :"img/snowflake.png", minSize: 10, maxSize: 28, flakeCount : 30, maxSpeed : 10});
  }
  $('.game__location--third').fadeIn('slow');
});