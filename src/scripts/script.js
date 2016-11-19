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

//setInterval('alert("прошло 5 секунд")', 5000);

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
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

// Usage:

preload([
  'img/fair.png',
  'img/texture.png',
  'img/library.png',
  'img/factory.png',
  'img/front-bg.jpg',
  'img/card-game.png',
  'img/win-bg.jpg',
]);