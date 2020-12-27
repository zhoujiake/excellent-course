var navObj = {}// 被选中的当前菜单对象
$(function() {
    //自适应高度
    function courseHeight() {
        var height = $(window).height() - 180;
        $('.course-main').css('min-height', height + 'px');
        $('.tab-content').css('min-height', height - 150 + 'px');
    }
    courseHeight()
    $(window).resize(function() {
        courseHeight()
    });
})
