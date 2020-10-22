$(document).ready(function(){
    // $("h1").on("click",function() {
    $("#wrap").on("click", "h1" ,function() {
        var length = $("h1").length;/* commit h1 tag's length not text */
        alert(length)
        var targetHTML = $(this).html();
        alert(targetHTML)
        $("#wrap").append("<h1>"+length+"-"+targetHTML+"</h1>");    
    })
})
