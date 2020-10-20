$(document).ready(function(){
    $("td").filter(function(index){
        /*"td"의 index값에 해당하는 부분에 색 채워주기*/
        return  index == 4|| index >= 6 && index <= 9 || index >= 14 && index <= 18;
    }).css("backgroundColor","pink");
})
