var gameTime = localStorage.getItem("gameTime");
if (gameTime === 'undefined' || gameTime ==='null') {
  gameTime = 0;
}

if ($(window).width() < 900) {
  $('.win').snowfall({image :"img/snowflake.png", minSize: 5, maxSize: 15, flakeCount : 10, maxSpeed : 5});
}
else {
  $('.win').snowfall({image :"img/snowflake.png", minSize: 10, maxSize: 28, flakeCount : 30, maxSpeed : 10});
}

function minute() {
  var timeNumber = $('.win__result-number').text();
  if (timeNumber.substring(timeNumber.length-1) == "1") {
    $('.win__result-text--minute').text('хвiлiну');
  }
  else if (timeNumber.substring(timeNumber.length-1) == "2"||timeNumber.substring(timeNumber.length-1) == "3"||timeNumber.substring(timeNumber.length-1) == "4") {
    $('.win__result-text--minute').text('хвiлiны');
  }
  else {
    $('.win__result-text--minute').text('хвiлiн');
  };
}


$('.win__result-number').text(gameTime);