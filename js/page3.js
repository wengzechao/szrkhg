$(document).ready(function(){
    $(".new-click").click(function(){
        $(".new").css("background-color","#D9FBEA");
        $(".old").css("background-color","#FFFFFF");
        $(".content-middle-message_new").css("display","block");
        $(".content-middle-message_old").css("display","none");
        if(window.screen.width>768)
            $(".content-down").css("margin-top","880px");
        else if(window.screen.width<=768 && window.screen.width>425)
            $(".content-down").css("margin-top","840px");
        else
            $(".content-down").css("margin-top","700px");
    });
    $(".old-click").click(function(){
        $(".old").css("background-color","#D9FBEA");
        $(".new").css("background-color","#FFFFFF");
        $(".content-middle-message_new").css("display","none");
        $(".content-middle-message_old").css("display","block");
        if(window.screen.width>768)
            $(".content-down").css("margin-top","640px");
        else if(window.screen.width<=768 && window.screen.width>425)
            $(".content-down").css("margin-top","580px");
        else
            $(".content-down").css("margin-top","450px");
    });
});