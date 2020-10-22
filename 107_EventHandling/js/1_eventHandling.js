$(document).ready(function(){
    $("a").click(function(e){
        $(this).css("backgroundColor","blue");
        e.preventDefault();/*delete a tag's event, event bubbling */
        e.stopPropagation();/*delete own's event*/
    })
    $("h1").click(function(event){
        $(this).css("backgroundColor","red");
    })
});
