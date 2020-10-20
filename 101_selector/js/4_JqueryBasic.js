$(document).ready(function(){
    $("tr:first").css("backgroundColor","yellow");
    $("td:last-of-type").css("backgroundColor","gray");
    $("td:nth-child(2)").css("backgroundColor","pink");
    /*숫자는 0부터 카운트 된다는 사실을 잊지말기 */
    $("tr:even").css("backgroundColor","#e4e4e4")
})
