$(document).ready(function(){$("#fullpage").fullpage({onLeave:function(o,e,a){var t=$(this);1==o&&"down"==a?($(".phone-shape").addClass("move-phone-up"),$(".intro").addClass("invis"),$(".bluebar").addClass("barmove"),$(".copy").addClass("copy-opacity")):2==o&&"up"==a&&($(".phone-shape").removeClass("move-phone-up"),$(".intro").removeClass("invis"),$(".bluebar").removeClass("barmove"),$(".copy").removeClass("copy-opacity")),2==o&&"down"==a?($(".phone-shape").addClass("move-phone-left"),$(".copy").removeClass("copy-opacity"),$(".col-three").addClass("col-three-appear"),$(".bluebar").removeClass("barmove")):3==o&&"up"==a&&($(".copy").addClass("copy-opacity"),$(".phone-shape").removeClass("move-phone-left"),$(".col-three").removeClass("col-three-appear"),$(".bluebar").addClass("barmove")),3==o&&"down"==a?$(".four").addClass("four-move"):4==o&&"up"==a&&$(".four").removeClass("four-move")}})}),$("#contact").click(function(){$(".contact-form").addClass("move-contact-form")}),$(".contact-form img").click(function(){$(".contact-form").removeClass("move-contact-form")}),$(document).ready(function(){$(window).resize(function(){$(".iphone-container").css({position:"absolute",left:($(".light").width()-$(".iphone-container").outerWidth())/2,top:($(".light").height()-$(".iphone-container").outerHeight())/2}),$(".iphone-container").css({position:"absolute",left:($(".dark").width()-$(".iphone-container").outerWidth())/2,top:($(".dark").height()-$(".iphone-container").outerHeight())/2})}),$(window).resize()});