          $(function(){
              
              
              function clickList(a){
                  $("div.aboutCont ul li").removeClass("aboutOn");
                  $("div.aboutCont ul li:eq("+a+")").addClass("aboutOn");
                  $("div.aboutBtnwrap ul li").removeClass("aboutAct");
                  $("div.aboutBtnwrap ul li:eq("+a+")").addClass("aboutAct");
              }
              
              $("div.aboutBtnwrap ul li").click(function(){
                  var a = $(this).index();
                  clickList(a);
                  
          
              })
              
              
          })