$(document).ready(function(){
    $("div").click(function(){
        // 현재 div의 넓이값을 구해서, width 변수에 저장
        var wd = $(this).css("width");
        // 현재 div의 높이값을 구해서, height 변수에 저장
        var he = $(this).css("height")
        $(this).animate({
            width:parseInt(wd)+50, height:parseInt(he)+50
            /*width:"+=50",height:"+=50" */
        },"slow")
    })
})