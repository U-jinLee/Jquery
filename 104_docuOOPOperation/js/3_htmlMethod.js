$(document).ready(function(){
    /*javascript의 innerHtml과 비슷한 역할을 한다. */
    var html = $("h1").html(); //header-1만 출력한다
    // alert(html);
    var text = $("h1").text(); // header-1, header-2, header-3 모두 출력
    // alert(text);

    // $("div").html("<h1>안녕 자기?</h1>")  // h1태그가 적용된 후에 출력됐다.
    // $("div").text("<h1>안녕 자기?</h1>") //html 적용 없이 그대로 출력됐다

    /*html(function(index, oldhtml) */
    //h1태그의 html에 새로운 html을 저장할 거시다
    // $("h1").html(function(index,html){
    //     return "🤔"+html+"🤔";
    // })
    /*text(function(index, oldhtml) */
    // $("h1").text(function(index,html){
    //     return "🤔"+html+"🤔";
    // })
})
