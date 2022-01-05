
    
      

    //$(window).load(function() 이거 버전이 하향버전
/*플러그인은 실제 사용하는 목적이 개발하기 힘든 디자인을 사용하는 것이 우선이다. 따라서 버전이 낮은 버전까지 또는 낮은 버전에서 개발이 시작되었기 때문에 jquery 플러그인이 높을수록 정석대로 작성을 해줘야 하는 것이다.
만약 $(window).load(function() 문법으로 사용하고 싶다면 Jquery버전을 낮춰서 사용하면 된다.*/
    $(document).ready(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});
    

        
