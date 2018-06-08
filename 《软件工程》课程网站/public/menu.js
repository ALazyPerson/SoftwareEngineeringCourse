var menu=[
    {
        "name":"个人中心",
        "children":[
            {
                "name":"个人信息",
                "url":"../page/personalInfo.html"
            },
            {
                "name":"安全设置",
                "url":"../page/setSafe.html"
            }
        ]
    },
    {
        "name":"课程中心",
        "children":[
            {
                "name":"教学课件",
                "url":"../page/courseSrc.html"
            },
            {
                "name":"教学大纲",
                "url":"../page/teachProgerss.html"
            }
        ]
    },
    {
        "name":"学习中心",
        "children":[
            {
                "name":"习题发布",
                "url":"../page/homeworkPush.html"
            },
            {
                "name":"习题批阅",
                "url":"../page/homeworkCheck.html"
            }
        ]
    }
    ,
    {
        "name":"站内互动",
        "children":[
            {
                "name":"课程论坛",
                "url":"../page/curriculumForum.html"
            }
        ]       
    }
]

$(function () {
    var html = '<ul class="layui-nav layui-nav-tree"  lay-filter="test">';
    $.each(menu, function (index, val) {
        html += '<li class="layui-nav-item"><a href="javascript:;">'+val.name+'</a><dl class="layui-nav-child">';
        $.each(val.children, function (index2, val2) {
            html += '<dd><a href="'+val2.url+'">'+val2.name+'</a></dd>';
        })
        html += '</dl></li>';
    })
    html += '</ul>';
    $("#sidebar").append(html);
    layui.use("element",function () {
        var element=layui.element;
        element.render("sidebar");
    })
});