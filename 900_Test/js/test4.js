$(document).ready(function(){
    $("h1").mouseenter(function(){
        $(this/*내가 선택한 h1태그라는 의미*/).addClass("header").html(function(index, html){
            return "🤔"+html;
        });
    })
    $("h1").mouseleave(function(){
        $(this).removeClass().html(function(index, html){
            return ;
        });
    })
})
