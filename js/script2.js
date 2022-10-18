$(document).ready(function(){

    $("ul.menu>li:nth-child(1)").click(function(){
        $(this).css({"background-color":"blueviolet"});
        $(this).siblings().css({"background-color":"skyblue"});
        

    });
    $("ul.menu>li:nth-child(2)").click(function(){
        $(this).css({"background-color":"blueviolet"});
        $(this).siblings().css({"background-color":"skyblue"});
    });


});