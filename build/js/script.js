$(document).ready(function(){

$(".card-game__button").click(function(e){e.preventDefault(),$(this).parents(".card-game").fadeOut("slow"),$(".game").removeClass("game--blocked")});
$(".card__button").click(function(e){e.preventDefault(),$(".socials--main").hide(),$(".front").hide(),$(".game").fadeIn("slow"),timer()});
function minute(){var e=$(".win__result-number").text();"1"==e.substring(e.length-1)?$(".win__result-text--minute").text("хвiлiну"):"2"==e.substring(e.length-1)||"3"==e.substring(e.length-1)||"4"==e.substring(e.length-1)?$(".win__result-text--minute").text("хвiлiны"):$(".win__result-text--minute").text("хвiлiн")}$(".game__ingredient").click(function(e){e.preventDefault(),$(this).addClass("game__ingredient--active"),$(this).unbind("click"),$(".game-popup__picture").attr("src","img/"+$(this).data("picture")),$(".game-popup__header").text($(this).data("header")),$(".game-popup__text--ingredient").text($(this).data("text")),$(".game-popup--ingredient").fadeIn("slow").css("display","flex")}),$(".game__ingredient--correct").click(function(e){e.preventDefault(),$(".slots__item--empty").first().addClass($(this).data("slot")).removeClass("slots__item--empty"),$(".game-popup").removeClass("game-popup--incorrect"),$(".game-popup").addClass("game-popup--correct")}),$(".game__ingredient--incorrect").click(function(e){e.preventDefault(),$(".game-popup").removeClass("game-popup--correct"),$(".game-popup").addClass("game-popup--incorrect")}),$(".game-popup__close").click(function(e){e.preventDefault(),$(".game-popup").fadeOut("slow"),$(".slots__item").hasClass("slots__item--empty")||($(".message").fadeIn("slow"),$(".game__location--third").is(":visible")&&($(".game").hide(),$(".win__result-number").text(time),minute(),$(".win").fadeIn("slow").css("display","flex"),$(".win").snowfall({image:"img/snowflake.png",minSize:10,maxSize:28,flakeCount:30,maxSpeed:10})))}),$(".message__close").click(function(e){e.preventDefault(),$(".message").hide(),$(".game").addClass("game--blocked"),$(".slots__item").removeClass().addClass("slots__item").addClass("slots__item--empty")}),$(".message__close--library").click(function(e){e.preventDefault(),$(this).parents(".game__location").hide(),$(".question").snowfall("clear"),$(".game__location--second").fadeIn("slow")}),$(".message__close--factory").click(function(e){e.preventDefault(),$(this).parents(".game__location").hide(),$(".game__location--third").fadeIn("slow")});




$(window).on("load",function(){$(".preloader").fadeOut("slow",function(){$(this).remove()})});
$(".question__button--yes").click(function(e){e.preventDefault(),$(".question").snowfall("clear"),$(".question").hide(),$(".front").fadeIn("slow")});





function count(){time+=1}function timer(){setInterval(count,6e4)}function preload(i){$(i).each(function(){$("<img/>")[0].src=this})}$(function(){$(window).bind("resize",function(){resizeMe()}).trigger("resize")});var resizeMe=function(){var i=2550,n=10,e=$(window).width(),g=e/i,a=n*g;$("html").css("font-size",a)};$(".question").snowfall({image:"img/snowflake.png",minSize:10,maxSize:28,flakeCount:30,maxSpeed:10});var time=0;preload(["img/fair.png","img/library.png","img/factory.png","img/front-bg.jpg","img/card-game.png","img/win-bg.jpg","img/card-shadow.png","img/game-table.jpg","img/game-objects.png","img/card.png","img/envelope.png","img/question-bg.jpg","img/card-night.png"]),$(".card__button").on("click",function(){ga("send","event","main","click","start")}),$(".socials__item").on("click",function(){ga("send","event","socials","click","share")}),$(".socials--gold .socials__item").on("click",function(){ga("send","event","socials","click","share-game")});})