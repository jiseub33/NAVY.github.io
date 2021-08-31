$(document).ready(function () {
    slide();
});


// �����̵� 
function slide() {
    var wid = 0;
    var now_num = 0;
    var slide_length = 0;
    var auto = null;
    var $dotli = $('.dot>li');
    var $panel = $('.panel');
    var $panelLi = $panel.children('li');

    // ���� �ʱ�ȭ
    function init() {
        wid = $('.slide').width();
        now_num = $('.dot>li.on').index();
        slide_length = $dotli.length;
    }

    // �̺�Ʈ ����
    function slideEvent() {

        // �����̵� �ϴ� dot��ư Ŭ��������
        $dotli.click(function () {
            now_num = $(this).index();
            slideMove();
        });

        // ���� ��ư Ŭ��������
        $('.next').click(function () {
            nextChkPlay();
        });

        // ���� ��ư Ŭ��������
        $('.prev').click(function () {
            prevChkPlay();
        });

        // �����÷���
        autoPlay();

        // �����÷��� ����
        autoPlayStop();

        // �����÷��� �����
        autoPlayRestart();

        // ȭ��ũ�� �缳�� �Ǿ�����
        resize();
    }

    // �ڵ����� �Լ�
    function autoPlay() {
        auto = setInterval(function () {
            nextChkPlay();
        }, 3000);
    }

    // �ڵ����� ����
    function autoPlayStop() {
        $panelLi.mouseenter(function () {
            clearInterval(auto);
        });
    }


    // �ڵ����� ����ٰ� �����
    function autoPlayRestart() {
        $panelLi.mouseleave(function () {
            auto = setInterval(function () {
                nextChkPlay();
            }, 3000);
        });
    }

    // ���� ��ư Ŭ���� ���� �˻��� �����̵� ����
    function prevChkPlay() {
        if (now_num == 0) {
            now_num = slide_length - 1;
        } else {
            now_num--;
        }
        slideMove();
    }

    // ���� ��ư Ŭ���� ���� �˻��� �����̵� ����
    function nextChkPlay() {
        if (now_num == slide_length - 1) {
            now_num = 0;
        } else {
            now_num++;
        }
        slideMove();
    }

    // �����̵� ����
    function slideMove() {
        $panel.stop().animate({
            'margin-left': -wid * now_num
        });
        $dotli.removeClass('on');
        $dotli.eq(now_num).addClass('on');
    }

    // ȭ��ũ�� ������ ȭ�� �缳��
    function resize() {
        $(window).resize(function () {
            init();
            $panel.css({
                'margin-left': -wid * now_num
            });
        });
    }
    init();
    slideEvent();
}
