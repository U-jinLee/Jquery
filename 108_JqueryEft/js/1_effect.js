$(document).ready(function(){
    /*effect about show, hide and toggle*/
    $("#default").on("click",function(){
        $("p").hide("2000","linear",function(){
        alert("Event executed successfully")
        });/*From the front duration, easing, callback parameter is option */
    })
    $("#default").on("mouseleave",function(){
        $("p").show("2000");
    })
    /* */
    $("h1").on("click",function(){
        $("p").toggle("2000");
    })
    $("#slideDown").on("click",function(){
        $("p").slideDown();
    })
    $("#slideUp").on("click",function(){
        $("p").slideUp();
    })
    $("#fadeIn").on("click",function(){
        $("p").fadeIn("slow");
    })
    $("#fadeOut").on("click",function(){
        $("p").fadeOut("slow");
    })
    $("#fadeToggle").on("click",function(){
        $("p").fadeToggle("slow");
    })
})
