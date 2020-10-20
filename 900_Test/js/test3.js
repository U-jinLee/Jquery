$(document).ready(function(){
    $("tr").css("backgroundColor","blue"); 
    $("tr").filter(":even").css("backgroundColor","gray").end().filter(":nth-child(1)").css({"backgroundColor":"black","color":"white"});
})
