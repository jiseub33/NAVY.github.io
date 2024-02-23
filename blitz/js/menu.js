document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.menu button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var className = this.classList[0]; // 버튼 클래스명 가져오기

            // 모든 버튼과 콘텐츠 요소에서 active 클래스를 제거
            buttons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            var contents = document.querySelectorAll('.content > div');
            contents.forEach(function(content) {
                content.classList.remove('active');
            });

            // 클릭한 버튼에 active 클래스 추가
            this.classList.add('active');

            // 해당하는 콘텐츠에 active 클래스 추가
            var content = document.querySelector('.content .' + className);
            content.classList.add('active');
        });
    });
});