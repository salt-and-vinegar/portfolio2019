 $(function(){
              
              $("#homeClick").click(function(){
                  
                  var wH = $(window).height();
                $("body, html").stop().animate({
                        scrollTop:wH
                                           },800)
                  
              })
              
          })
    