$(document).ready(function(){
    setInterval(function(){ $("div").animate({left:500},2000). animate({left:0},2000)},2000);
    $("#a").click(function() {
        /*움직임을 멈추고, 제자리에서 바로 왼쪽으로 다시 이동함.*/
        $("div").stop();
    })
    $("#b").click(function() {
        /*움직임을 멈추고, 다음 setInterval() 함수가 실행될 때까지 대기함*/
        $("div").stop(true);
    })
    $("#c").click(function() {
        /*버튼을 누르면 사각형이 오른쪽 끝으로 이동하고,  또 누르면 바로 왼쪽으로 아마 분기를 넘어가는 것 같음 */
        $("div").stop(false, true);
    })
    $("#d").click(function() {
        $("div").stop(true, true);
    })
})