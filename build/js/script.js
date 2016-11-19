$(document).ready(function(){

$(".card-game__button").click(function(t){t.preventDefault(),$(this).parents(".card-game").fadeOut("fast")});
$(".card__button").click(function(t){t.preventDefault(),$(".front").hide(),$(".game").fadeIn("fast")});
$(".game__ingredient").click(function(e){e.preventDefault(),$(".game-popup__picture").attr("src","img/"+$(this).data("picture")),$(".game-popup__header").text($(this).data("header")),$(".game-popup__text--ingredient").text($(this).data("text")),$(".game-popup--ingredient").fadeIn("fast").css("display","flex"),$(".slots__item").hasClass("slots__item--empty")||$(this).parents(".game__location").hide()}),$(".game__ingredient--correct").click(function(e){e.preventDefault(),$(".slots__item--empty").first().addClass($(this).data("slot")).removeClass("slots__item--empty"),$(".game-popup__status").removeClass("game-popup__status--minus"),$(".game-popup__status").addClass("game-popup__status--key"),$(".game-popup__picture").removeClass("game-popup__picture--incorrect"),$(".game-popup__picture").addClass("game-popup__picture--correct")}),$(".game__ingredient--incorrect").click(function(e){e.preventDefault(),$(".game-popup__status").removeClass("game-popup__status--key"),$(".game-popup__status").addClass("game-popup__status--minus"),$(".game-popup__picture").removeClass("game-popup__picture--correct"),$(".game-popup__picture").addClass("game-popup__picture--incorrect")}),$(".game-popup__close").click(function(e){e.preventDefault(),$(".game-popup").fadeOut("fast"),$(".slots__item").hasClass("slots__item--empty")||($(".message").fadeIn("fast"),$(".slots__item").removeClass().addClass("slots__item").addClass("slots__item--empty"),$(".game__location--third").is(":visible")&&($(".game").hide(),$(".win").fadeIn("fast").css("display","flex")))}),$(".message__close").click(function(){$(".message").hide()}),$(".message__close--library").click(function(){$(this).parents(".game__location").hide(),$(".game__location--second").fadeIn("fast")}),$(".message__close--factory").click(function(){$(this).parents(".game__location").hide(),$(".game__location--third").fadeIn("fast")});




$(window).on("load",function(){$(".preloader").fadeOut("slow",function(){$(this).remove()})});
$(".question__button--yes").click(function(t){t.preventDefault(),$(".question").hide(),$(".front").fadeIn("fast")});




function preload(i){$(i).each(function(){$("<img/>")[0].src=this})}$(function(){$(window).bind("resize",function(){resizeMe()}).trigger("resize")});var resizeMe=function(){var i=2550,n=10,g=$(window).width(),e=g/i,r=n*e;$("html").css("font-size",r)};preload(["img/fair.png","img/texture.png","img/library.png","img/factory.png","img/front-bg.jpg","img/card-game.png","img/win-bg.jpg"]);})