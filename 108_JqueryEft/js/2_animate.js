$(document).ready(function(){
    // $("div").on("click",function(){
    //     $(this).animate({left:500},"slow");
    // })
    // $("div").on("mouseenter",function(){
    //     if($(this).css("position").value = 500){
    //         $(this).animate({left:0},"slow");
    //     }
    // })

    $("div").hover(function(){$(this).animate({left:500},"slow");},
        function(){$(this).animate({left:0},"slow");})
})