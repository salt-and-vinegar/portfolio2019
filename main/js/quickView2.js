$(function(){
    
    var count = 0;
    var lastH = 0;
    var pos = new Array();
    var wH = $(window).height();
    var lH = $("#con>div:last-child").height();
    
    if(wH>lH){lastH = wH-lH;}
    
    function active(a){
        $("#quick a").removeClass("on");
        $("#quick a:eq("+a+")").addClass("on");
    }
    
    for(var i = 0; i<$("#con>div").length; i++){
        if(i==$("#con>div").length-1){
            
            pos[i]=$("#con>div:eq("+i+")").offset().top-lastH;
            
        }else{
            pos[i] = $("#con>div:eq("+i+")").offset().top
        }
    }
    
    $("#quick a").click(function(){
        count = $(this).index();
        active(count);
        $("body, html").stop().animate({
            scrollTop:pos[count]
        },800)
        return false;
    })
    
    $(window).scroll(function(){
        
        $("#con>div").each(function(){
            if($(window).scrollTop()>=pos[$(this).index()]){
                count = $(this).index();
            }
            
        })
        active(count);
        
        
    })
    
    $(window).resize(function(){
        
        var count = 0;
    var lastH = 0;
    var pos = new Array();
    var wH = $(window).height();
    var lH = $("#con>div:last-child").height();
    
    if(wH>lH){lastH = wH-lH;}
    
    function active(a){
        $("#quick a").removeClass("on");
        $("#quick a:eq("+a+")").addClass("on");
    }
    
    for(var i = 0; i<$("#con>div").length; i++){
        if(i==$("#con>div").length-1){
            
            pos[i]=$("#con>div:eq("+i+")").offset().top-lastH;
            
        }else{
            pos[i] = $("#con>div:eq("+i+")").offset().top
        }
    }
    
    $("#quick a").click(function(){
        count = $(this).index();
        active(count);
        $("body, html").stop().animate({
            scrollTop:pos[count]
        },800)
        return false;
    })
    
    $(window).scroll(function(){
        
        $("#con>div").each(function(){
            if($(window).scrollTop()>=pos[$(this).index()]){
                count = $(this).index();
            }
            
        })
        active(count);
        
        
    })
        
    })
    
    
})