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

var Share = {
    vkontakte: function(purl, ptitle, pimg, text) {
        url = 'http://vkontakte.ru/share.php?';
        url += 'url=' + encodeURIComponent(purl);
        url += '&title=' + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&image=' + encodeURIComponent(pimg);
        url += '&noparse=true';
        Share.popup(url);
    },
    facebook: function(purl, ptitle, pimg, text) {
        FB.init({
            appId: 742453755906695,
            status: true,
            cookie: true
        });

        FB.ui({
            display: 'popup',
            method: 'share',
            name: ptitle,
            link: purl,
            href: purl,
            picture: pimg,
            // caption: '',
            description: text,
            // message: ''
        });
    },
    odnoklassniki: function(purl, ptitle, pimg, text) {
        url  = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
		url += '&st.comments=' + encodeURIComponent(text);
		url += '&st._surl='    + encodeURIComponent(location.href);

        Share.popup(url);
    },
    twitter: function(purl, ptitle, pimg, text) {
        url  = 'https://twitter.com/share';
		url += '?url=' + escape(window.location.href);
		url += '&text=' + encodeURIComponent(text);

        Share.popup(url);
    },


    popup: function(url) {
        window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
    }
};



$(document).on("click", ".socials__item", function(e) {
    e.preventDefault();

    var loc = location.href;
	var title = document.title;
	var description = $('meta[property="og:description"]').attr('content');;
    var image = $('meta[property="og:image"]').attr('content');

    if($(this).hasClass('socials__item--vk'))
    	Share.vkontakte(loc, title, image, description);

    if($(this).hasClass('socials__item--fb'))
    	Share.facebook(loc, title, image, description);

    if($(this).hasClass('socials__item--twitter'))
    	Share.twitter(loc, title, image, description);

    if($(this).hasClass('socials__item--ok'))
    	Share.odnoklassniki(loc, title, image, description);
});
    
if ($(window).width() < 737) {
  document.documentElement.requestFullScreen();
};

