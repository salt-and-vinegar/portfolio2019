 $(function(){
        var winW = $(window).width();
     
        if(winW > 1023){
            
        $(window).scroll(function(){
            
            $("#alfred").each(function(){
                
                var divH = $("#alfred").height();
                var obtSB = $("#alfWrap").offset().top + $(this).outerHeight()/4;
                var winSB = $(window).scrollTop() + divH;
                
                if(obtSB < winSB){
                    $("#alfWrap img").css({"opacity":"1","marginLeft":"0"})
                }else{
                    $("#alfWrap img").css({"opacity":"0","margin-left":"-100px"})
                }
                
            })
            
        })
            
        }else if(winW > 480){
            
        $(window).scroll(function(){
            
            $("#alfred").each(function(){
                
                var divH = $("#alfred").height();
                var obtSB = $("#alfWrap").offset().top + $(this).outerHeight()/4;
                var winSB = $(window).scrollTop() + divH;
                
                if(obtSB < winSB){
                    $("#alfWrap img").css({"opacity":"1","left":"20%"})
                }else{
                    $("#alfWrap img").css({"opacity":"0","left":"15%"})
                }
                
            })
            
        })
            
        }else{
            
        }


        
    })
