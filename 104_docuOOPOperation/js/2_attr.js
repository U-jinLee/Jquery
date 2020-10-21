$(document).ready(function(){
    /*img태그의 src속성의 getter 역할*/
    // var attr = $("img").attr("src")
    // alert(attr);
    /*img태그의 width 속성에 100값 설정 */
    $("img").attr("width",100)
    /*img태그의 width, height 속성에 100값 설정 */
    $("img").attr({"width":100,"height":100})
    $("img").removeAttr("height");
    $("img").attr("width",function(index){
        return (index+1)*100
    })
    $("img").attr({"width":function(index){
        return (index+1)*100;}, "height":100
    })
})
