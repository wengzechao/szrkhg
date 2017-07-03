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

    // 日期选择
    $("#dd").calendar({
        trigger: "#dt",
        zIndex: 999,
        format: "yyyy-mm-dd",
    });

    $(function (){
        $("#time").click(function (event) {
            $(".time-choose").show();
            $(document).one("click", function () {
                $(".time-choose").hide();
                $("#time").val(hour+":"+minute+" "+ap);
            });
            event.stopPropagation();
        });
        $(".time-choose").click(function (event) {
            event.stopPropagation();
        });
    });



    var hour=$(".hour").val(),
        minute=$(".minute").val(),
        ap=$(".ap").val();
    $(".hour-up").click(function(){
        hour=$(".hour").val();
        hour++;
        if(hour===12 && ap==="AM"){
            $(".ap-up").click();
        }
        else if(hour>12 && ap==="PM"){
            hour=1;
        }
        else if(hour===12 && ap==="PM"){
            hour="00";
            $(".ap-up").click();
        }
        $(".hour").val(hour);
    });
    $(".hour-down").click(function(){
        hour=$(".hour").val();
        hour--;
        if(hour<0 && ap==="AM"){
            hour=11;
            $(".ap-down").click();
        }
        else if(hour<=0 && ap==="PM"){
            hour=12;
        }
        else if(hour===11 && ap==="PM"){
            $(".ap-up").click();
        }
        $(".hour").val(hour);
    });

    $(".minute-up").click(function(){
        minute=$(".minute").val();
        minute++;
        if(minute>=60){
            minute=0;
            minute=minute+"0";
            $(".hour-up").click();
        }
        else if(minute<10){
            minute="0"+minute;
        }
        $(".minute").val(minute);
    });
    $(".minute-down").click(function(){
        minute=$(".minute").val();
        if("00" === minute){
            minute=60;
            minute--;
            $(".hour-down").click();
        }
        else if(minute<=10){
            minute--;
            minute="0"+minute;
        }
        else{
            minute--;
        }
        $(".minute").val(minute);
    });

    $(".ap-up").click(function(){
        ap=$(".ap").val();
        if("PM" === ap){
            ap="AM";
        }
        else{
            ap="PM";
        }
        $(".ap").val(ap);
    });
    $(".ap-down").click(function(){
        ap=$(".ap").val();
        if("PM" === ap){
            ap="AM";
        }
        else{
            ap="PM";
        }
        $(".ap").val(ap);
    });
});