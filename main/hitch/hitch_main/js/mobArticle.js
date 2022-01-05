        $(function(){
            
            
    $("article>div").click(function(){
        var winW = $(window).width();
            
            if(winW < 480){
               $(this).toggleClass("openP");
            }
        
        
                      
            })
            
        })