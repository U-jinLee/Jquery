$(document).ready(function(){
    $("h1").on("click"/*eventName*/,function()/*unnamed function handler*/{
        $(this).html(function(index, oldhtml){
            return oldhtml+ "+";
        })
    })
    $("h1").on({mouseenter: function(){$(this).addClass("bgcolor")},
    mouseleave: function(){$(this).removeClass()}})
    
})

//hover({mouseenter, mouseleave})
