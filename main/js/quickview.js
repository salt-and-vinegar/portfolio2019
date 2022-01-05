$(function(){
        var count = 0;
        var lastH = 0;
        var pos = new Array(); //new Date랑 비슷한거임.
        /*
        pos = section의 상단값을 담기 위한 array 배열함수로 지정한다는 뜻으로 가지고 있다.
        담는 예시는 : pos[i] = $("#con section:eq("+i+")").offset().top;
        pos의 인덱스 배열 찾아서 offset 담아라라는 뜻.
        i에 있는 배열 담아서 대입한다는 뜻.
        */
        var wH = $(window).height();//브라우저 높이
        var lH = $("#con>div:last-child").height();//마지막 섹션높이
        if(wH>lH){lastH = wH-lH;} //전역변수처럼 썼지만,,,엊저구적저구,,??ㅠ
        
        function active(a){//누구든지 쓸 수 있도록 하는 것
            $("#quick a").removeClass("on");
            $("#quick a:eq("+a+")").addClass("on");
        }
        
        /*if = 좌우버튼 클릭 / for = 동시다발적으로 담는 거*/
        for(var i = 0; i<$("#con>div").length; i++){
            if(i==$("#con>div").length-1){
                /*
                pos[i]의 i값이 마지막 section이 담겼을 때를 말한다.
                i는 숫자 3을 말하며 pos[3]이라고 이해하면 된다.
                pos["#con section:first-child","#con section:nth-child(2)","#con section:nth-child(3)","#con section:last-child"]인데 -1한거임. length는 1부터 시작하는 개수, index 숫자는 0부터 시작하기 때문에.
                */
                pos[i]=$("#con>div:eq("+i+")").offset().top-lastH;
               
               }else{
        pos[i] = $("#con>div:eq("+i+")").offset().top
        }
            /*
            .offset()은 연산식이라고 생각하면 된다.
            offset은 top과 left기준으로 많이 찾는다.
            */
            
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
                /*
                자기번호에 해당하는 pos만 보라는 뜻
                pos[i]는 위에서 top한번만 비교하고 끝이다.
                그래서 $(this).index()로 비교해야 한다.
                */
                count = $(this).index();
                }
            })
            active(count);
        })
        
        
    })