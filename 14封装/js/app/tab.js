/**
 * Created by Administrator on 2017/12/20.
 */

define(['jquery',function ($) {
    var tab = function () {

    }

}]);


$('.tab_title>div').click(function () {
    $('.tab_title div').removeClass('active');
    $(this).addClass('active');
    $('.tab_content div').removeClass('active').eq($(this).index()).addClass('active');
});