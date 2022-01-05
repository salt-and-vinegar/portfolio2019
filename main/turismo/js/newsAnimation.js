

$(function(){
    
    var num = 0;
    var list = $("#ani li").length
    function gal(c){
        $("#ani").stop(true, true).animate({"marginLeft":c*-600},800)
    }
    
    $("button#left, button#right").click(function(){
        if($(this).attr("id")=="right"){
         if(num<list-1) num++;
        }else{
         if(num>0) num--;
        }
        gal(num);
    })
    
})