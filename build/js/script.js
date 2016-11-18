$(document).ready(function(){

$(".card-game__button").click(function(){$(".card-game").fadeOut("fast")});
$(".card__button").click(function(t){t.preventDefault(),$(".front").hide(),$(".game").fadeIn("fast")});




$(window).on("load",function(){$(".preloader").fadeOut("slow",function(){$(this).remove()})});
$(".question__button--yes").click(function(t){t.preventDefault(),$(".question").hide(),$(".front").fadeIn("fast")});



$(function(){$(window).bind("resize",function(){resizeMe()}).trigger("resize")});var resizeMe=function(){var i=2550,e=10,n=$(window).width(),r=n/i,s=e*r;$("html").css("font-size",s)};})