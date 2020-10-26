$(document).ready(function(){
    /*stack:FILO input: 1234 output:4321 */
    $("div").click(function(){
        $(this).animate({
            left:"+=60"
        },2000);
        $(this).animate({
            height:"+=60"
        },2000);
        $(this).animate({
            width:"+=60"
        },2000);
    })
    /*quene:FIFO input: 1234 output:1234 */
    setTimeout(function() {
        $("div").clearQueue();
    },3000)
})