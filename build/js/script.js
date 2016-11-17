$(document).ready(function(){




$(".question__button--yes").click(function(t){t.preventDefault(),$(".question").fadeOut("fast")});

$(function(){$(window).bind("resize",function(){resizeMe()}).trigger("resize")});var resizeMe=function(){var i=2550,e=10,n=$(window).width(),r=n/i,s=e*r;$("html").css("font-size",s)};})