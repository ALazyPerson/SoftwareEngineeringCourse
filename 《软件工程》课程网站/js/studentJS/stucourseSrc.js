$(function () {
    var thispage=$(".layui-nav-item").each(function (index, item) {
        if(index==3){
            $(this).addClass("layui-nav-itemed");
            $(this).children("dl").children("dd").each(function (i, e) {
                if(i==0){
                    $(e).addClass("layui-this");
                }
            })
        }
    });
})