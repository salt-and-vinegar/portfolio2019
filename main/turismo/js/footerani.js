$(function(){
    
    
    var wd = $(".aniWrap ul li").width()+10;
    $(".aniWrap ul li:last").prependTo(".aniWrap ul");
    //제이쿼리는 클래스보다 아이디 사용하는게 좋음
    $(".aniWrap ul").css("margin-left",-wd);
    $("#ltBtn").click(function(){
        $(".aniWrap ul").stop(true, true).animate({
            marginLeft:parseInt($(".aniWrap ul").css("margin-Left"))+wd
        },function(){
             $(".aniWrap ul li:last").prependTo(".aniWrap ul");
             $(".aniWrap ul").css("margin-left",-wd);
        })
    })
    $("#gtBtn").click(function(){
        $(".aniWrap ul").stop(true, true).animate({
            marginLeft:parseInt($(".aniWrap ul").css("margin-Left"))-wd
        },function(){
             $(".aniWrap ul li:first").appendTo(".aniWrap ul");
             $(".aniWrap ul").css("margin-left",-wd);
        })
    })
    
    
})