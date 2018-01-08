/**
 * @link 1397480529@qq.com
 * @Dipaka1992
 *
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

    //消除右键默认事件
    el.bind("contextmenu", function () {
        return false;
    });

    //监听鼠标右键
    el.mousedown(function (e) {
        if (3 == e.which) {
            console.log('我是右键');
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
                left: e.offsetX-324
                // left: -331
            });
        }


    });

    //点击外框除了CODcr之外，让弹窗消失
    $(".Device").click(function () {

        el.find('.rightKey').css({
            display: 'none'
        });

    });
    //阻止点击rightKey的时候消失
    el.find('.rightKey').click(function (e) {
        e.stopPropagation();
        el.find('.rightKey').css({
            display: 'block'
        })
    });

}

//左键点击




rightAlert($(".CODcr"));
rightAlert($(".wuCanShu"));
rightAlert($(".CODmn"));
rightAlert($(".anDan"));
rightAlert($(".allLin"));
rightAlert($(".allDan"));


$('.YHover').click(function (e) {
    e.stopPropagation();

        $('.mouseOver').css({
            display: 'none'
        });

        $('.rightKey').css({
            display: 'none'
        });

        $(this).find('.mouseOver').css({
            display: 'block'
        });

        console.log(e.offsetY);
        $(this).find('.mouseOver').css({
            display: 'block',
            top: e.offsetY,
            left: e.offsetX-193
            // left: 0
        });

});


$(".Device").click(function () {

    $('.mouseOver').css({
        display: 'none'
    });

});


//
$('.mouseOver').mousedown(function (e) {
    if(3 == e.which){
        return false;//阻止链接跳转
    }

});

$('.rightKey').mousedown(function (e) {
    if(3 == e.which){
        return false;//阻止链接跳转
    }

});



















