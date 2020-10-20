//filter() method
$(document).ready(function(){
    /*h3태그 중에서 even에 css 적용(배경색:블랙, 글자색:흰색)*/
    //filter()라는 메소드는 왜 사용해야 할까?(짝수, 홀수가 아닌 3의 배수에 css를 적용하고싶다면? 만약 우리가 통속의 뇌가 아니라면? 인생이 실시간으로 조져지고 있는 중이라면?)
    $("h3").filter(":even").css({"backgroundColor":"black", "color":"white"});
    
    /*filter()를 통해 3의 배수에 css를 적용해 보자*/
    $("h3").filter(function(index/*매개변수 값은 내가 임의로 지정;다른 이름도 쌉가능*/){
         return index % 2 == 0;
     }).css({"backgroundColor":"black","color":"white"})
     
    /* $(selector).filter(selector);의 적용방식 */
    //h3에 css를 적용한다. 짝수 번호에는 글자를 red로 적용한다.
    $("h3").css("backgroundColor","orange").filter(":even").css("color","red").end()/*원했던 공식이 끝나고 end()를 넣어줄 것 그렇지 않으면 계산된 값에 중복으로 계산된다.*/
    .filter(":odd").css("color","blue");
})
