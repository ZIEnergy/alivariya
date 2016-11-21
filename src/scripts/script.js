$(function () {
    $(window).bind('resize', function () {
        resizeMe();
    }).trigger('resize');
});

var resizeMe = function () {
    //Standard width, for which the body font size is correct
    var preferredWidth = 2550;
    //Base font size for the page
    var fontsize = 10;

    var displayWidth = $(window).width();
    var percentage = displayWidth / preferredWidth;
    var newFontSize = fontsize * percentage;
    $("html").css("font-size", newFontSize);
};

$('.question').snowfall({image :"img/snowflake.png", minSize: 10, maxSize: 28, flakeCount : 30, maxSpeed : 10});

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
  'img/fair.png',
  'img/library.png',
  'img/factory.png',
  'img/front-bg.jpg',
  'img/card-game.png',
  'img/animation-tree.png',
  'img/win-bg.jpg',
  'img/card-shadow.png',
  'img/game-table.jpg',
  'img/game-objects.png',
  'img/card.png',
  'img/envelope.png',
  'img/question-bg.jpg',
  'img/card-night.jpg',
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