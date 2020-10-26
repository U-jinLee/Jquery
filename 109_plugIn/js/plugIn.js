$(document).ready(function(){
    $("div").hover(
        function(){
            $(this).addClass("reverse",3000);
        }, function(){
            $(this).removeClass("reverse",3000);
        }
    )
})