$(document).ready(function() {
    $('#fullpage').fullpage({
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

            //after leaving section 2
            if(index == 1 && direction =='down'){
                $('.bar').addClass('rotate');
            }

            else if(index == 2 && direction == 'up'){
                $('.bar').removeClass('rotate');
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

