        $(function(){
            
            
            
            
            //$("header nav ul")toggleClass("open")할 거임
            
            $("header nav").click(function(){
                $("header nav ul").toggleClass("open");
                $("div#logIn").toggleClass("openL");
            });
            
            
            
        })