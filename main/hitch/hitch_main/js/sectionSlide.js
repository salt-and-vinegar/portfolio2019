 $(function(){
     
    
            var winW = $(window).width();
            var secW = $(".secItems").width();
            var count = $("#secWrap #secCont .secItems").length;
            
            var currentPg = 0;
            var changePg = function(){
                $("#secCont").animate({left:-secW*currentPg});
            }
            
            $("#btnL").click(function(){
                if(currentPg>0){
                    currentPg = currentPg - 1;
                    changePg();
                }
            })
            
            if(winW < 480){
                $("#btnR").click(function(){
                if(currentPg<count-1){
                    currentPg = currentPg + 1;
                    changePg();
                }
            })
            }else if(winW < 1023){
                $("#btnR").click(function(){
                if(currentPg<count-2){
                    currentPg = currentPg + 1;
                    changePg();
                }
                })
            }else{
                $("#btnR").click(function(){
                if(currentPg<count-2){
                    currentPg = currentPg + 1;
                    changePg();
                }
            })
            }
            

        })