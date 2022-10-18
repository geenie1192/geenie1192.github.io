$(document).ready(function(){

    $("ul.main>li").mouseover(function(){
        $(this).children("ul.sub").stop().slideDown(300);
    });
    $("ul.main>li").mouseout(function(){
        $(this).children("ul.sub").stop().slideUp(300);
    });

    // $("ul.main>li").mouseover(function(){
    //     $("ul.sub").stop().slideDown(300);
    // });
    // $("ul.main>li").mouseout(function(){
    //     $("ul.sub").stop().slideUp(300);
    // });


    var c =0;
    setInterval(function(){
        if(c<2){
            c++;
        }else{
            c=0;
            $(".slide>a").eq(c).css({"z-index":"3"});
        }
        $(".slide>a").eq(c).animate({"top":"0%"},500,function(){
            $(".slide>a").eq(c).siblings().css({"top":"100%"});
            if(c==0){
                $(".slide>a").eq(c).css({"z-index":"0"});
            }
        });
    },2500);
    
    // $(".gal").hide();
    // $("ul.menu>li").click(function(){
    //     $(this).addClass("on");
    //     $(this).siblings().removeClass("on");
    // });
  
    //$(".gal").hide();
    $("ul.menu>li:nth-child(1)").click(function(){
        $(this).css({"background-color":"hotpink"});
        $(this).siblings().css({"background-color":"pink"});
        $(".gal").hide();
        $(".gong").show();
    });
    $("ul.menu>li:nth-child(2)").click(function(){
        $(this).css({"background-color":"hotpink"});
        $(this).siblings().css({"background-color":"pink"});
        $(".gal").show();
        $(".gong").hide();
    });

    $(".gong > li:nth-child(1)").click(function(){
        $(".popup").show();
    });
    $("button").click(function(){
        $(".popup").hide();
    });

    
});
