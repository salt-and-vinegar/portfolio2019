$(function(){
    
    var menu = $("nav ul li");
    var contents = $("body .scroll");
    menu.click(function(){
        
        var tg = $(this);
        var i = tg.index();
        var section = contents.eq(i);
        var tt = section.offset().top;
        $("html, body").stop.animate({scrollTop:tt});
    });
    
    $(window).scroll(function(){
        var sct =$(window).scrollTop()+100;
         contents.each(function(){
             var tg = $(this);
             var i = tg.index();
             if(tg.offset().top<=sct){
                 menu.removeClass("on");
                 menu.eq(i).addClass("on");
             }
         })
    })
    
}