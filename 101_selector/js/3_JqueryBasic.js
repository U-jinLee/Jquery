$(document).ready(function(){
    /*속성 선택자로 text입력란 선택 방법 */
    $("[type='text']").val("abcd");
     /*기호 필터 선택자로 동일하게 선택 */
     /*기호선택자를 제외하고 나머지에 값을 먹여주려고 할 때 제한이 된다. */
    $(":text").val("abcd");
    $(":password").val("abcd");
    $(":radio").val("abcd");

    /*입력 양식 필터선택자*/
    //활성화된 입력양식에 배경색을 빨간색으로
    // $(":enabled").css("backgroundColor","red");
    //비활성화된 입력양식에 배경색을 파란색으로
    // $(":disabled").css("backgroundColor","blue");
    setInterval(function(){
        var value = $("select > option:selected").val();
        alert(value);
        $("[type=text]:focus").css("backgroundColor","yellow");
    },10000);

})
