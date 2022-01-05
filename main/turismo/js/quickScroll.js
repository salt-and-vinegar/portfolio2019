

$(window).scroll(function(){
    
    var sct = $(window).scrollTop()+200;
    $("#quick").stop(true, true).animate({top:sct},150)
    
})