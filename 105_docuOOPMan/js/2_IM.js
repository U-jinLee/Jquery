$("document").ready(function(){
    $("img").css({"width":"250","height":"100"})
    setInterval(function(){
        /*실행하고자 하는 문장, 초 */
        $("img").first().appendTo("body");
    },2000
    )
})

//2초마다 첫 번째 이미지를 마지막으로 보낸다.
