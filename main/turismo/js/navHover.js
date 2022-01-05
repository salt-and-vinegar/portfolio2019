


$(function(){

    
    $("nav ul ul").slideUp(0);
    $("nav>ul>li").mouseenter(function(){
        $(this).find("ul").stop(true,true).slideDown();
    }).mouseleave(function(){
        $("nav ul ul").stop(true,true).slideUp();
    })
    /*.mouseover와 .mouseenter의 차이점
    .mouseover는 부모와 자식요소를 넓게 잡는다. mouseout
    .mouseenter는 정확히 위치를 잡아야 하는 것이다. mouseleave*/
    
})