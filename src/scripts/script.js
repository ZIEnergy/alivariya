$(function () {
    $(window).bind('resize', function () {
        resizeMe();
    }).trigger('resize');
});

var resizeMe = function () {
    //Standard width, for which the body font size is correct
    var preferredWidth = 2550;
    
    if ($(window).width() < 900) {
      preferredWidth = 320;
      
      if(window.innerHeight < window.innerWidth){ 
        preferredWidth = 568;
      }
      
      if(window.innerWidth/window.innerHeight > 0.7 && window.innerHeight > window.innerWidth){ 
        preferredWidth = 480;
      }
    }
    //Base font size for the page
    var fontsize = 10;

    var displayWidth = $(window).width();
    var percentage = displayWidth / preferredWidth;
    var newFontSize = fontsize * percentage;
    $("html").css("font-size", newFontSize);
};

if ($(window).width() < 900) {
  $('.question').snowfall({image :"img/snowflake.png", minSize: 5, maxSize: 15, flakeCount : 10, maxSpeed : 5});
}
else {
  $('.question').snowfall({image :"img/snowflake.png", minSize: 10, maxSize: 28, flakeCount : 30, maxSpeed : 10});
}


var time = 0;

function count() {
  time = time+1;
};

function timer() {
  setInterval(count, 60000);
};

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

preload([
  'img/fair.jpg',
  'img/library.jpg',
  'img/factory.jpg',
  'img/front-bg.jpg',
  'img/card-game.png',
  'img/win-bg.jpg',
  'img/card-shadow.png',
  'img/game-table.jpg',
  'img/game-objects.png',
  'img/card.png',
  'img/question-bg.jpg',
  'img/animation-fireplace.png',
]);


$(".card__button").on("click", function () {
  ga("send", "event", "main", "click", "start")
});

$(".socials__item").on("click", function () {
  ga("send", "event", "socials", "click", "share")
});


$(".socials--gold .socials__item").on("click", function () {
  ga("send", "event", "socials", "click", "share-game")
});
    
if ($(window).width() < 737) {
  document.documentElement.requestFullScreen();
};