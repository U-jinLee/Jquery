$(document).ready(function(){
    /*문서 객체 제거(remove): h1 전체 항목에서 첫 번째를 삭제;h1 태그 자체가 제거된다*/
    //$("h1").first().remove();
    /*문서 객체 제거(empty): h1 전체 항목에서 첫 번째를 삭제; h1태그는 존재 텍스트 노드 및 자식노드만 제거*/
    // $("h1").first().empty();

    /*<h1>에 <body>를 추가한다. */
    $("<h1></h1>").html("Create h1 tag through Jquery and kill you mutherfucker").appendTo("body");
    $("<h1></h1>").html("me too fucking funges blue seal").prependTo("body");
})
