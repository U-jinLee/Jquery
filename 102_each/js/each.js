$(document).ready(function() {
    /*배열 선언과 초기화를 동시에 선언*/
    var array= [
        {name:"Naver"/*key값*/, link:"https://www.naver.com"/*value값*/},
        {name:"Daum", link:"https://www.daum.net"},
        {name:"Google", link:"https://www.google.com"},
    ]
    $.each(array, function(index, item){
        var output ="";

        output+="<a href='"+item.link+"'>"
        output+="<h1>"+item.name+"</h1>"
        output+="</a>"

        document.body.innerHTML += output;
    })
})
