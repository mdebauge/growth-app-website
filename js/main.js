$(document).ready(function() {
    $('#fullpage').fullpage({
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

            //after leaving section 2
            if(index == 1 && direction =='down'){
                $('.phone-shape').addClass('move-phone-up');
                $('.intro').addClass('invis');
            }

            else if(index == 2 && direction == 'up'){
                $('.phone-shape').removeClass('move-phone-up');
                $('.intro').removeClass('invis');
            }

            if(index == 2 && direction =='down'){

            }

            else if(index == 3 && direction == 'up'){

            }

            if(index == 3 && direction =='down'){

            }

            else if(index == 4 && direction == 'up'){

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



