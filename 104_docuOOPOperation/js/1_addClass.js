$(document).ready(function(){
    /*h1태그에 class="header" 추가 */
    $("h1").addClass("header");
    /*h1태그에 class="header" 추가 뒤쪽에 index 수를 붙이는 조건이다. */
    $("h1").addClass(function(index){
        return "header-"+index
    })
    /*h1태그에 class="header-0" 제거 */
    $("h1").removeClass("header-0")
})
