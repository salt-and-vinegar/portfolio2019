$(function(){
    
    
    
    var dir = -1;
    

    
    function roll(a){
        
    if($(window).width() > 1023){
            
        var aniW = $("#pom ul li img").width();
        $(".aniBox").stop().animate({"marginLeft":a*aniW+parseInt($(".aniBox").css("margin-left"))},1000,function(){
            
            if(a==-1){
                $(">li:first-child",this).appendTo($(this));
                
            }else{
                $(">li:last-child",this).prependTo($(this));
            }
            
            $(".aniBox").css("margin-left",-aniW);
            
        })
        }        
 
    }
    
    var autoRoll = setInterval(function(){roll(-1);},3000);
    
    $(".aniBox li").on("mouseenter",function(){
        clearInterval(autoRoll);
    }).on("mouseleave",function(){
        autoRoll = setInterval(function(){roll(-1);},3000);
    });
        
    $(window).resize(function(){
        
            winW = $(window).width();
        
        if($(window).width() < 1023){
           clearInterval(autoRoll);
            $(".anibox").css("margin-left","0px")
           }else{
               clearInterval(autoRoll);
               autoRoll = setInterval(function(){roll(-1);},3000);
           }
             })
        
    
         
    
             
         
    
})