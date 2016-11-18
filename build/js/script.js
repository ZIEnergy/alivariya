$(document).ready(function(){
$(".card-game__button").click(function(a){a.preventDefault(),$(".card-game").fadeOut("fast")});

$(".card__button").click(function(t){t.preventDefault(),$(".front").hide(),$(".game").fadeIn("fast")});
$(".game__ingredient").click(function(e){e.preventDefault(),$(".game-popup__picture").attr("src","img/"+$(this).data("picture")),$(".game-popup__header").text($(this).data("header")),$(".game-popup__text").text($(this).data("text")),$(".game-popup").fadeIn("fast").css("display","flex")}),$(".game__ingredient--correct").click(function(e){e.preventDefault(),$(".game-popup__status").removeClass("game-popup__status--minus"),$(".game-popup__status").addClass("game-popup__status--key")}),$(".game__ingredient--incorrect").click(function(e){e.preventDefault(),$(".game-popup__status").removeClass("game-popup__status--key"),$(".game-popup__status").addClass("game-popup__status--minus")}),$(".game-popup__close").click(function(e){e.preventDefault(),$(".game-popup").fadeOut("fast")});



$(window).on("load",function(){$(".preloader").fadeOut("slow",function(){$(this).remove()})});
$(".question__button--yes").click(function(t){t.preventDefault(),$(".question").hide(),$(".front").fadeIn("fast")});




$(function(){$(window).bind("resize",function(){resizeMe()}).trigger("resize")});var resizeMe=function(){var i=2550,e=10,n=$(window).width(),r=n/i,s=e*r;$("html").css("font-size",s)};})