$(document).ready(function(){
    /*1. 다음 테이블 태그에서 짝수행 배경색이 orange색이 되도록 하시오*/
    /*css와 Jquery의 결과값이 다른 이유? */
    //Jquery는 0부터 count css는 1부터 count
    $("tr:odd").css("backgroundColor","orange");

    /*2. 1번 테이블에서 첫번째 행의 배경색을 검은색, 글자를 흰색으로 설정하시오 */
    $("tr:nth-child(1)").css("backgroundColor","black").css("color","white");
    // 중괄호 방식 css({"background-color":"red", "color":"blue"})
    
    /*3. 다음과 같은 데이터를 이용해 같은 결과를 출력하세요 */
    var vage = ["고구마","감자","배추","고추"];
    $.each(vage, function(index, item){
        var output ="";

        output +="<h1>"+item+"</h1>"
        output +="</a>"

        document.body.innerHTML += output;
    })
})
