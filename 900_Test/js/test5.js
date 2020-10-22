$(document).ready(function(){
    $("textarea").on("keyup",function(){
        var length = $("textarea").val()/*text(),html()은 먹히지 않는 점을 주의해 주세요*/.length
        var num = 150-length;
        $("h1").text(num);
        if(num <= 0) {
            $("textarea").attr("readonly", true);
        }
    })
})
