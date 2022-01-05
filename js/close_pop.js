//이름과 변수명을 맞춰서 사용.

$(document).ready(function(){
	$(function(){
        
        var $open_popmsg = $("#popup"),
            $close_btn = $("#popup .popclose"),
            checkBoxElem =
            document.getElementById("check"),
            popUpName = "sunny";
            
        if(getCookies( popUpName ) == "done"){
            $open_popmsg.hide();
        }
        
		$close_btn.click(function(e) {
			if( checkBoxElem.checked == true){
				var expdate = new Date(),
					remainHours = 23 - expdate.getHours(),
					remainMin = 60 - expdate.getMinutes();			
				expdate.setTime( expdate.getTime() + ( remainHours * 60 * 60 * 1000 ) + ( remainMin * 60 * 1000 ) );
                //만들어져 있는 거 붙이는 게 더 빠름
                //setCookies에서 이름 정하는 위치가 중요하다.
				setCookies( popUpName, "done" , expdate );
			}
			$open_popmsg.hide();
			e.preventDefault();//클릭했을 때 이벤트 메소드가 사라짐.
		});
	});
    
    //여기 아래는 손 대지 말아야 할 범위.
    
	/* Cookie Set */
	function setCookies( name, value, expires ) {
		document.cookie = name + "=" + escape (value) + "; path=/; expires=" + expires.toGMTString();
	}
    
    /*
    여기까지 시간이 계산되는 부분
    */
    
	/* Cookie Load */
	function getCookies( name ) {
		var search = name + "=";
		offset = document.cookie.indexOf(search);
		if (document.cookie.length > 0) { // 쿠키가 설정되어 있다면    
			if (offset != -1) { // 쿠키가 존재하면
				offset += search.length;
				// set index of beginning of value
				end = document.cookie.indexOf(";", offset);			
				// 쿠키 값의 마지막 위치 인덱스 번호 설정
				if (end == -1)	end = document.cookie.length;		
				return unescape(document.cookie.substring(offset, end));
			}
		}
	}
});