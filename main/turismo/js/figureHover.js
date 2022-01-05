

$(function(){
    
    $("figure").hover(function(){
        $(this).find("figcaption").stop(true,true).animate({"top":0},300)
    },function(){
        $("figcaption").stop(true,true).animate({"top":330},300)
    })
    
})