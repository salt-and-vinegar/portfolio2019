 $(function(){
        
       
        
        $("header").click(function(){
            var winW = $(window).width();
            if(winW < 1023){
                
                $("header nav").toggleClass("navOpen");
                
            }
            
        })
        
    })
    