$(function(){
    
    
    $(".pricing-block").mouseout(function(){
        
        $(this).removeClass("featured");
        
    })
    
    $(".pricing-block").mouseover(function(){
        
        $(this).addClass("featured");
        
    })
    
    
})