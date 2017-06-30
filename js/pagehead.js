$(document).ready(function(){
    // 菜单栏
    function anim(duration){
        $(".navbar").animate(
            {height: "toggle"},
            {duration: duration}
        );
    }
    // 显示菜单栏
    $(".mobile-openbtn").click(function() {
        $(".mobile").slideUp();
        anim(600);
        $(".content").css("opacity","0.9");
        $(".content").block({ message: null });
    });
    // 隐藏菜单栏
    $("#navbar-img").click(function() {
        anim(600);
        $(".mobile").slideDown();
        $(".content").css("opacity","1.0");
        $(".content").unblock();
    });
});