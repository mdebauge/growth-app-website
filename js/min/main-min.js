$(document).ready(function(){$("#fullpage").fullpage({onLeave:function(o,e,t){var n=$(this);1==o&&"down"==t?($(".phone-shape").addClass("move-phone-up"),$(".intro").addClass("invis"),setTimeout(function(){$(".bluebar").addClass("barmove")},700)):2==o&&"up"==t&&($(".phone-shape").removeClass("move-phone-up"),$(".intro").removeClass("invis"),setTimeout(function(){$(".bluebar").removeClass("barmove")},1e3))}})}),$("#contact").click(function(){$(".contact-form").addClass("move-contact-form")}),$(".contact-form img").click(function(){$(".contact-form").removeClass("move-contact-form")}),$(document).ready(function(){$(window).resize(function(){$(".iphone-container").css({position:"absolute",left:($(".light").width()-$(".iphone-container").outerWidth())/2,top:($(".light").height()-$(".iphone-container").outerHeight())/2}),$(".iphone-container").css({position:"absolute",left:($(".dark").width()-$(".iphone-container").outerWidth())/2,top:($(".dark").height()-$(".iphone-container").outerHeight())/2})}),$(window).resize()});