 $(function(){
                $("div#top").fadeOut(0);})


$(window).scroll(
            
    
    
    function(){
        
        var sct = $(window).scrollTop()
        if(sct==0){
           $("div#top").fadeOut();
           }else{
           $("div#top").fadeIn();
           }
        
        
         $("div#top").click(function(){
            $("body, html").stop().animate({scrollTop:0});
        })
    }
    
);