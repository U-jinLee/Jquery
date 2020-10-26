$(document).ready(function(){
    $("#easeInElastic").click(function(){
        $("div").animate({
            left:400
        },2000,"easeInElastic").animate({left:0},1000,"easeInElastic")
    })

    $("#easeOutElastic").click(function(){
        $("div").animate({
            left:400
        },2000,"easeOutElastic").animate({left:0},1000,"easeOutElastic")
    })


})