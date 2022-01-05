    $(function(){
    
    function moveSlide(index){
        var movH = $(".banner_mask").outerHeight();
        var moveTop = -(index*movH);

        $(".slider_panel").stop(true,true).animate({top:moveTop},200);
    }

    $("#movCont ul li a").each(function(index){
        $(this).attr("data-index",index);
        
    }).hover(function(){
        var index = $(this).attr("data-index");
        moveSlide(index);
    })

})