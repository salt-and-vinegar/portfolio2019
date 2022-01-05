$(function(){
    
    $(window).on("scroll load",function(){
    
    $("body>div#history,div#proCam,div#proLens,div#divide,div#pom,div#sustain,div#shop,footer").each(function(){
        
        var winH = $(window).height();
        var obtSB = $(this).offset().top +
            $(this).outerHeight()/4;
        
        var winSB = $(window).scrollTop() + winH;
        
        if(obtSB < winSB){
            $(this).css({"opacity":"1", "transform":"translateY("+0+")em"})
        }else{
            $(this).css({"opacity":"0", transform:"translateY("+4+"em)"})
        }
        
    })
    
})
    
    
})