const toogleBtn = document.querySelector('.header-toogleBtn')
const mobile = document.querySelector('.header-mobile')
const menu = document.querySelector('.header-menu')

toogleBtn.addEventListener('click', () => {
    mobile.classList.toggle('active');
    menu.classList.toggle('active');
});

function setCookie( name, value, expiredays ) {  // 쿠키저장
	var todayDate = new Date(now);  //date객체 생성 후 변수에 저장
	todayDate.setDate( todayDate.getDate() + expiredays ); 
   	 // 시간지정(현재시간 + 지정시간)
	document.cookie = name + "=" + value + "; path=/; expires=" + todayDate.toUTCString() + ";"
	//위 정보를 쿠키에 굽는다
}

$(function(){
	$(".popup_box").draggable({containment:'parent', scroll:false}); // 레이어 팝업 창 드래그 가능
	//{containment:'parent', scroll:false} 화면 영역 밖으로 드래그 안됌.
                
	if(document.cookie.indexOf("popToday=close") < 0 ){      // 쿠키 저장여부 체크
		document.getElementById("popup_layer").style.display = "block";
		}else {
		document.getElementById("popup_layer").style.display = "none"; 
		}
	});
             

//그냥 닫기버튼 스크립트
function closePop() { 
	document.getElementById("popup_layer").style.display = "none";
}

moveScrollLeft = function() {
	var _scrollX = $('.shortcuts').scrollLeft();
	$('.shortcuts').scrollLeft(_scrollX + 200);
};

moveScrollright = function() {
	var _scrollX = $('.shortcuts').scrollLeft();
	$('.shortcuts').scrollLeft(_scrollX - 200);
};