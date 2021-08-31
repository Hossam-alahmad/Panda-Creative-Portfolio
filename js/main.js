$(document).ready(() => {  
    $(document).on("scroll",()=>{
        console.log($(document).scrollTop());
        if($(document).scrollTop() > 0){
            $(".navbar").addClass("nav-fixed");
        }
        else{
            $(".navbar").removeClass("nav-fixed");
        }
        if($(document).scrollTop() <= 0){
            navMenuActive("#home");
        }
        if($(document).scrollTop() >= 300){
            $("#img-container").removeClass("img-animate-left");
            $("#content").removeClass("content-animate-right");
        }
        if($(document).scrollTop() > 629 && $(document).scrollTop() < 1137){
            navMenuActive("#about");
        }
        if($(document).scrollTop() > 1137 && $(document).scrollTop() < 1770){
            navMenuActive("#skills");
        }
        if($(document).scrollTop() >= 1600){
            $(".service-item").removeClass("animate-scale");
        }
        if($(document).scrollTop() > 1770 && $(document).scrollTop() < 2326){
            navMenuActive("#services");
        }
        if($(document).scrollTop() > 2326 && $(document).scrollTop() < 3026){
            navMenuActive("#portfolio");
        }
        if($(document).scrollTop() > 3026){
            navMenuActive("#contact-me");
        }
    });
    $("#home").on("click",(e)=>{
        e.preventDefault();
        navMenuActive("#home");
        scrollTranslate(0);
        
    });
    $("#about").on("click",(e)=>{
        navMenuActive("#about");
        e.preventDefault();
        scrollTranslate(629);
        
    });
    $("#skills").on("click",(e)=>{
        e.preventDefault();
        navMenuActive("#skills")
        scrollTranslate(1280);
        
    });
    $("#services").on("click",(e)=>{
        e.preventDefault();
        navMenuActive("#services");
        scrollTranslate(1860);
        
    });
    $("#portfolio").on("click",(e)=>{
        e.preventDefault();
        navMenuActive("#portfolio");
        scrollTranslate(2360);
        
    });
    $("#contact-me").on("click",(e)=>{
        e.preventDefault();
        navMenuActive("#contact-me");
        scrollTranslate(3062);
        
    });
    $(".navbar #menu-bar").on("click",()=>{
        if(!$(".navbar #menu-list").hasClass("show-menu")){
            $(".navbar #menu-list").addClass("show-menu");
            $("#overlay").addClass("overlay-show");
        }
        else{
            $(".navbar #menu-list").removeClass("show-menu");
            $("#overlay").removeClass("overlay-show");
        }
    });
    $("#overlay").on("click",()=>{
        $(".navbar #menu-list").removeClass("show-menu");
        $("#overlay").removeClass("overlay-show");
    });
    $("#btn-video").on("click",()=>{
        $(".show-video-screen").addClass("show-screen");
    });
    $("#close-btn").on("click",()=>{
        $(".show-video-screen").removeClass("show-screen");
    });
    function navMenuActive($id){
        $("#menu-list li a.active").removeClass();
        $("#menu-list li a"+$id).addClass("active");
    }
    function scrollTranslate($scrollTopValue){
        setTimeout(() => {
            $i = $(document).scrollTop();
            if($i < $scrollTopValue){
                $interval = setInterval(() => {
                    $i += 10;
                    $(document).scrollTop($i);
                    if($i >= $scrollTopValue){
                        clearInterval($interval);
                    }
                },1);
            }
            else if($i > $scrollTopValue){
                $interval = setInterval(() => {
                    $i -= 10;
                    $(document).scrollTop($i);
                    if($i <= $scrollTopValue){
                        clearInterval($interval);
                    }
                },1);
            }
        },1000);
    }
    $(".menu-list ul").on('click','li',(e)=>{
            $array = $(".portfolio .col-lg-8 .col-lg-6");
            $(".menu-list ul li.menu-list-active").removeClass();
            $(e.currentTarget).addClass("menu-list-active");
            $(".portfolio .col-lg-4").fadeOut();
            $(".portfolio .col-lg-8 .col-lg-6").fadeOut();
            if(e.currentTarget.innerHTML === "All"){
                $(".portfolio .col-lg-8 .col-lg-6").fadeIn();
                $(".portfolio .col-lg-4").fadeIn();
            }
            else if(e.currentTarget.innerHTML === "UI/UX"){
                $(".portfolio .col-lg-4").fadeIn();
                for($i =0;$i<$array.length;$i++){
                    if($(".portfolio .col-lg-8 .col-lg-6").eq($i).attr("data-text") === "Ui/Ux"){
                        $(".portfolio .col-lg-8 .col-lg-6").eq($i).fadeIn();
                    }
                }
            }
            else if(e.currentTarget.innerHTML === "Websites"){
                $(".portfolio .col-lg-4").fadeIn();
                for($i =0;$i<$array.length;$i++){
                    if($(".portfolio .col-lg-8 .col-lg-6").eq($i).attr("data-text") === "Websites"){
                        $(".portfolio .col-lg-8 .col-lg-6").eq($i).fadeIn();
                    }
                }
            }
            else{
                $(".portfolio .col-lg-4").fadeIn();
                for($i =0;$i<$array.length;$i++){
                    if($(".portfolio .col-lg-8 .col-lg-6").eq($i).attr("data-text") === "Dashboards"){
                        $(".portfolio .col-lg-8 .col-lg-6").eq($i).fadeIn();
                    }
                }
            }
            
    });

})