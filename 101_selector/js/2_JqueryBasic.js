$(document).ready(function(){
    /*input 태그의 type 속성의 값이 text와 같은 걸 선택해 배경을 빨간색으로 선택*/
    //$("[type='text']").css("backgroundColor","red");
    /*input 태그의 type 속성의 값이 text와 같지 않은 것을 선택해 배경을 빨간색으로 선택*/
    //$("[type!='text']").css("backgroundColor","red");
    /*속성값이 word로 끝나는 것에 css를 적용해라 */
    // $("[type$='word']").css("backgroundColor","red");
    /*속성 값이 'ID입력'인 태그에 css적용 */
    // $("[placeholder|='ID입력']").css("backgroundColor","red");
    /*속성값이 특정 단어인 ‘ID’로 시작하는 모든 태그를 선택*/
    // $("[placeholder^='ID']").css("backgroundColor","red");
    /*속성값이 특정 단어인 ‘입력’을 포함하는 모든 태그들을 선택*/
    // $("[placeholder~='ID입력']").css("backgroundColor","red");
    /*속성의 값이 ‘hello’를 포함하는 모든 태그들을 선택*/
    // $("[placeholder*='ID']").css("backgroundColor","red");

    /*val method*/
    $("[type='text']").val("abcd");
    /*var값에 아무 것도 입력하지 않을 시에는 password의 getter역할을 하게 됨*/
    var PW = $("[type='password']").val();
    alert(PW)
}) 
