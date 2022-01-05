$(function(){
              
              $(window).on("scroll load",function(){
                  //개발자들이 쓰는 방식
                  //$(window).scroll(function(){}) 이거랑 같은 거임
                $("body>header,section,div#hover,article,div#news,div#popup").each(function(){
                    
                    var winH = $(window).height();
                    var obtSB = $(this).offset().top + $(this).outerHeight()/4;
                    /*
                    outerheight는 물체의 높이값에서 padding까지 포함되는 높이를 말하며 .outerHeight(true)값을 작성하면 margin값까지 계산되므로 실제 높이 200+50으로 계산하는 값이 나온다.
                    */
                    var winSB = $(window).scrollTop() + winH;
                    //선생님은 winSB = $(window).scrollTop + $(w).height();
                    
                    if(obtSB < winSB){//스크롤 값이 더 높아야함
                        $(this).css({"opacity":"1","transform":"translateY("+0+"em)"})
                        
                    }else{                        
                    $(this).css({"opacity":"0","transform":"translateY("+10+"em)"})
                        
                    }
                    
                })  
                  
                  
              })
              
          })