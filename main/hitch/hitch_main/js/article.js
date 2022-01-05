 $(function(){
        var winW=$(window).width();
     
     if(winW > 1023){
         
                 $(window).scroll(function(){
            
            $("article>div").each(function(){
                
                var divH = $("article>div").height();
                var obtSB = $(this).offset().top + $(this).outerHeight()/4;
                var winSB = $(window).scrollTop() + divH;
                
                if(obtSB < winSB){
                    $(this).css({"opacity":"1","transform":"translateY("+0+")em"})
                }else{
                    $(this).css({"opacity":"0","transform":"translateY("+5+")em"})
                }
                
            })
            
        })
         
     }

        
    })

