$(document).ready(function(){
    $("ul.main>li").mouseover(function(){
        $("ul.sub").stop().slideDown(300);
    });
    $("ul.main>li").mouseout(function(){
        $("ul.sub").stop().slideUp(300);
    });

    var current =0;
    setInterval(function(){
        if(current < 2){
            current++;
        }else{
            current=0;
            $(".slide>a").eq(current).css({"z-index":"3"});
        }
        $(".slide > a").eq(current).animate({"top":"0%"},500,function(){
            $(".slide > a").eq(current).siblings().css({"top":"100%"});
            if(current==0){
                $(".slide>a").eq(current).css({"z-index":"0"});
            }
        });
    },2500);

    var c=0;
    setInterval(function(){
        if(c<2){
            c++;
        }else{
            c=0;
            $(".slide>a").eq(c).css({"z-index":3});
        }
        $(".slide>a").eq(c).animate({"top":"0%"},500,
        function(){
            $(".slide > a").eq(c).siblings().css({"top":"100%"});
            if(c==0){
                $(".slide>a").eq(c).css({"z-index":"0"});
            }
        });
    },2500);
    $(".gal").hide();
    $(".m1").click(function(){
        $(".m2").css({"background-color":"beige"});
        $(this).css({"background-color":"olive"});
        $(".gal").hide();
        $(".gong").show();
    });
    $(".m2").click(function(){
        $(".m1").css({"background-color":"beige"});
        $(this).css({"background-color":"olive"});
        $(".gong").hide();
        $(".gal").show();
    });

    $(".gong > li:nth-child(1)").click(function(){
        $(".popup").show();
    });
    $("button").click(function(){
        $(".popup").hide();
    });

});
