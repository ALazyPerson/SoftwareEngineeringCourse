$(function () {
    var thispage=$(".layui-nav-item").each(function (index, item) {
        if(index==2){
            $(this).addClass("layui-nav-itemed");
            $(this).children("dl").children("dd").each(function (i, e) {
                if(i==0){
                    $(e).addClass("layui-this");
                }
            })
        }
    });
})

//时间磋转成YYYY-MM=DD
function timestampToTime(timestamp) {
    var date = new Date(timestamp);
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = (date.getDate()< 10 ? '0'+(date.getDate()) : date.getDate()) + ' ';
    return Y+M+D;
}
window.onload=function(){
    $.ajax({
        method:'POST',
        url:'http://localhost:3000/get?userID=dfs',
        success(data){
            var count = 0;

            if (data.name == null) {
                $('#name').val('未填写');
            } else {
                $('#name').val(data.name);
                count++;
            }

             if (data.sex == 0) {
                $(":radio[name='sex'][value='0']").attr("checked","checked");  
            } else if (data.sex == 1) {
                $(":radio[name='sex'][value='1']").attr("checked","checked");  
            } else {
                $(":radio[name='sex'][value='0']").attr("checked","checked");  
                count++;
            }

            if (data.year == 0) {
                $('#year').val('未填写');
            } else {
                $('#year').val(timestampToTime(data.year));
                count++;
            }

            if (data.national == null) {
                $('#national').val('未填写');
            } else {
                $('#national').val(data.national);
                count++;
            }

            
            if (data.nativePlace == null) {
                $('#nativePlace').val('未填写');
            } else {
                $('#nativePlace').val(data.nativePlace);
                count++;
            }

            
            if (data.mobile == null) {
                $('#mobile').val('未填写');
            } else {
                $('#mobile').val(data.mobile);
                count++;
            }

            
            if (data.identityCard == null) {
                $('#identityCard').val('未填写');
            } else {
                $('#identityCard').val(data.identityCard);
                count++;
            }
            
            
            if (data.education == null) {
                $('#education').val('未填写');
            } else {
                $('#education').val(data.education);
                count++;
            }

            
            if (data.academicDegree == null) {
                $('#academicDegree').val('未填写');
            } else {
                $('#academicDegree').val(data.academicDegree);
                count++;
            }

            if (data.jobName == null) {
                $('#jobName').val('未填写');
            } else {
                $('#jobName').val(data.jobName);
                count++;
            }

            if (data.enterJobDate == 0) {
                $('#enterJobDate').val('未填写');
            } else {
                $('#enterJobDate').val(timestampToTime(data.enterJobDate));
                count++;
            }

            if (data.number == null) {
                $('#number').val('未填写');
            } else {
                $('#number').val(data.number);
                count++;
            }

            if (data.workTel == null) {
                $('#workTel').val('未填写');
            } else {
                $('#workTel').val(data.workTel);
                count++;
            }

            if (data.office == null) {
                $('#office').val('未填写');
            } else {
                $('#office').val(data.office);
                count++;
            }
           
            if (data.email == null) {
                $('#email').val('未填写');
            } else {
                $('#email').val(data.email);
                count++;
            }
            
            if (data.studyDirection == null) {
                $('#studyDirection').val('未填写');
            } else {
                $('#studyDirection').val(data.studyDirection);
                count++;
            }

            if (data.college == null) {
                $('#college').val('未填写');
            } else {
                $('#college').val(data.college);
                count++;
            }

            if (data.workExperience == null) {
                $('#workExperience').val('未填写');
            } else {
                $('#workExperience').val(data.workExperience);
                count++;
            }

            var head_progress = document.getElementById('head_progress');
            switch (count) {
                case 0:
                    head_progress.setAttribute("lay-percent", "0%");
                    break;
                case 1:
                    head_progress.setAttribute("lay-percent", "5%");
                    break;
                case 2:
                    head_progress.setAttribute("lay-percent", "10%");
                    break;
                case 3:
                    head_progress.setAttribute("lay-percent", "15%");
                    break;
                case 4:
                    head_progress.setAttribute("lay-percent", "20%");
                    break;
                case 5:
                    head_progress.setAttribute("lay-percent", "25%");
                    break;
                case 6:
                    head_progress.setAttribute("lay-percent", "30%");
                    break;
                case 7:
                    head_progress.setAttribute("lay-percent", "35%");
                    break;
                case 8:
                    head_progress.setAttribute("lay-percent", "40%");
                    break;
                case 9:
                    head_progress.setAttribute("lay-percent", "45%");
                    break;
                case 10:
                    head_progress.setAttribute("lay-percent", "50%");
                    break;
                case 11:
                    head_progress.setAttribute("lay-percent", "55%");
                    break;
                case 12:
                    head_progress.setAttribute("lay-percent", "60%");
                    break;
                case 13:
                    head_progress.setAttribute("lay-percent", "65%");
                    break;
                case 14:
                    head_progress.setAttribute("lay-percent", "70%");
                    break;
                case 15:
                    head_progress.setAttribute("lay-percent", "75%");
                    break;
                case 16:
                    head_progress.setAttribute("lay-percent", "82%");
                    break;
                case 17:
                    head_progress.setAttribute("lay-percent", "90%");
                    break;
                default:
                    head_progress.setAttribute("lay-percent", "100%");
            }
            layui.use('element', function () {
                var element = layui.element;
                element.render('progress');
            });
        }
    })
}
$('#update').click(function(){
    var data={};
    var name=$("#name").val(); data.name=name;
    var sex=$('input[name="sex"]:checked ').val(); data.sex=sex;
    var year=$("#year").val();data.year=new Date(year).getTime();
    var national=$("#national").val();data.national=national;
    var nativePlace=$("#nativePlace").val(); data.nativePlace=nativePlace;
    var mobile=$("#mobile").val();data.mobile=mobile;       
    var identityCard=$("#identityCard").val(); data.identityCard=identityCard;
    var education=$("#education").val(); data.education=education;
    var academicDegree=$("#academicDegree").val(); data.academicDegree=academicDegree;     
    var jobName=$("#jobName").val(); data.jobName=jobName;
    var enterJobDate=$("#enterJobDate").val(); data.enterJobDate=new Date(enterJobDate).getTime();;        
    var number=$("#number").val(); data.number=number;
    var workTel=$("#workTel").val(); data.workTel=workTel;
    var office=$("#office").val(); data.office=office;
    var email=$("#email").val(); data.email=email;
    var studyDirection=$("#studyDirection").val();data.studyDirection=studyDirection;
    var college=$("#college").val(); data.college=college;
    var workExperience=$("#workExperience").val(); data.workExperience=workExperience;     
    data=JSON.stringify(data);

    console.log(data);

    $.ajax({
        method:'POST',
        url:'http://localhost:3000/add',
        contentType : "application/json ; charset=utf-8",
        data:data,
        success(d){
            console.log(d)
        }
    })
})

layui.use('form', function(){  
    var form = layui.form;
    form.on('submit(update)', function(data){
        layer.msg(JSON.stringify(data.field));
            return false;
    });
});
layui.use('laydate', function(){
    var laydate = layui.laydate;
    //执行一个laydate实例
    laydate.render({
        elem: '#year' //指定元素
    });
    laydate.render({
        elem: '#enterJobDate' //指定元素
    });
});