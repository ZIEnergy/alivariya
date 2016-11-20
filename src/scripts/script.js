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

//function flyToElement(flyer, flyingTo) {
//    var $func = $(this);
//    var divider = 3;
//    var flyerClone = $(flyer).clone();
//    $(flyerClone).css({position: 'absolute', top: $(flyer).offset().top + "px", left: $(flyer).offset().left + "px", opacity: 1, 'z-index': 1000});
//    $('body').append($(flyerClone));
//    var gotoX = $(flyingTo).offset().left + ($(flyingTo).width() / 2) - ($(flyer).width()/divider)/2;
//    var gotoY = $(flyingTo).offset().top + ($(flyingTo).height() / 2) - ($(flyer).height()/divider)/2;
//     
//    $(flyerClone).animate({
//        opacity: 1,
//        left: gotoX,
//        top: gotoY,
//        width: $(flyer).width()/divider,
//        height: $(flyer).height()/divider
//    }, 1500,
//    function () {
//        $(flyingTo).fadeOut('fast', function () {
//            $(flyingTo).fadeIn('fast', function () {
//                $(flyerClone).fadeOut('fast', function () {
//                    $(flyerClone).remove();
//                });
//            });
//        });
//    });
//};

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
  'img/win-bg.jpg',
  'img/card-shadow.png',
  'img/game-table.jpg',
  'img/game-objects.png',
  'img/card.png',
  'img/envelope.png',
  'img/question-bg.jpg',
  'img/card-night.png',
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