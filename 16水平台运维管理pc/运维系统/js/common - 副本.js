/**
 * Created by Administrator on 2018/1/3.
 */


//设置开关
$('.systemState>span').on('click', function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});

$('.chuzao>span').on('click', function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});

$('.pingmu>span').on('click', function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    var state = ['待机', '测试', '全面清洗'];
    $('.screenState').html(state[$(this).index() - 1]);
});

$('.DeviceState>span').on('click', function () {
    $(this).toggleClass('active');
});


//警报灯
function warnLamp(warnVal) {
    if (warnVal == 0) {
        $('.warnLamp').removeClass('warning')
    }

    if (warnVal == 1) {
        $('.warnLamp').addClass('warning');
    }
}

warnLamp(0);



//右键点击事件
function rightAlert(el) {
    //hover不可用
    function nHover() {
        el.hover(function () {
            el.find('.mouseOver').css({
                display: 'none'
            })
        }, function () {
            el.find('.mouseOver').css({
                display: 'none'
            })
        });
    }

    //yHover 可用
    function yHover() {

        el.hover(function () {
            el.find('.mouseOver').css({
                display: 'block'
            })
        }, function () {
            el.find('.mouseOver').css({
                display: 'none'
            })
        });

        el.siblings().hover(function () {
            el.find('.mouseOver').css({
                display: 'none'
            })
        }, function () {
            el.find('.mouseOver').css({
                display: 'none'
            })
        });
    }



    //消除右键默认事件
    el.bind("contextmenu", function () {
        return false;
    });


    yHover();


    //监听鼠标右键
    el.mousedown(function (e) {
        if (3 == e.which) {

            $('.rightKey').css({
                display: 'none',
            });

            $('.mouseOver').css({
                display: 'none',
            });

            console.log(e.offsetY);
            el.find('.rightKey').css({
                display: 'block',
                top: e.offsetY,
                left: e.offsetX
            });



            //如果右键弹窗是消失的话,下面的代码是起作用的
            var T = $('.rightKey').is(':hidden');
            if (T) {
                console.log($('.rightKey').is(':hidden') + "3");
                nHover();
            } else {
                console.log($('.rightKey').is(':hidden') + "4");
                yHover();
            }






        }
    });


    //点击外框除了CODcr之外，让弹窗消失
    $(".Device").click(function (e) {

        el.find('.rightKey').css({
            display: 'none',
        });

        yHover();

    });
    //阻止点击rightKey的时候消失
    el.find('.rightKey').hover(function (e) {
        e.stopPropagation();
        el.find('.rightKey').css({
            display: 'block',
        })
    });
}


rightAlert($(".CODcr"));
rightAlert($(".wuCanShu"));
rightAlert($(".CODmn"));
rightAlert($(".anDan"));
rightAlert($(".allLinDan"));




















