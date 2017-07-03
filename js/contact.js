$(document).ready(function(){
    function anim(duration){
        $('.navbar').animate(
            {height: 'toggle'},
            {duration: duration}
        );
    }
    $('.mobile-openbtn').click(function() {
        $('.mobile').slideUp();
        anim(600);
        $(".content").css("opacity","0.9");
        $(".content").block({ message: null });
    });
   
    $('#navbar-img').click(function() {
        anim(600);
        $('.mobile').slideDown();
        $(".content").css("opacity","1.0");
        $(".content").unblock();
    });
});