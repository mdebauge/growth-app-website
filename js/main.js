$(document).ready(function() {
    $('#fullpage').fullpage({
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

            //after leaving section 2
            if(index == 1 && direction =='down'){
                $('.bar').addClass('rotate');
                $('#contact').addClass('blue');
                // $('.half').addClass('move-phone-down');
            }

            else if(index == 2 && direction == 'up'){
                $('.bar').removeClass('rotate');
                $('#contact').removeClass('blue');
            }

            if(index == 2 && direction =='down'){
                $('.bar').removeClass('rotate');
            }

            else if(index == 3 && direction == 'up'){
                $('.bar').addClass('rotate');
            }

            if(index == 3 && direction =='down'){
                $('.bar').addClass('rotate');
            }

            else if(index == 4 && direction == 'up'){
                $('.bar').removeClass('rotate');
            }
        }
    });
});


$('#contact').click(function() {
    $('.contact-form').addClass('move-contact-form');
});
$('.contact-form img').click(function() {
    $('.contact-form').removeClass('move-contact-form');
});

$(document).ready(function(){
                           
 $(window).resize(function(){

  $('.iphone-container').css({
   position:'absolute',
   left: ($('.light').width() 
     - $('.iphone-container').outerWidth())/2,
   top: ($('.light').height() 
     - $('.iphone-container').outerHeight())/2
  });

  $('.iphone-container').css({
   position:'absolute',
   left: ($('.dark').width() 
     - $('.iphone-container').outerWidth())/2,
   top: ($('.dark').height() 
     - $('.iphone-container').outerHeight())/2
  });

 });
 
 $(window).resize();

});



