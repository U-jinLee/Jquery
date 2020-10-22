$(document).ready(function(){
    $("p").on("myevent"/*trigger를 통해서 만들어진 이벤트*/,function(event,data1,data2){
        $("p").text("input date:"+data1+","+data2)
    })
    
    $(":button").click(function(){
        $("p").trigger("myevent",/*선택사항*/["one","two"])
    })
})
