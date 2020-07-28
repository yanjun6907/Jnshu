//Jquey
$(function(){
    $(".btn").on('click',function(){
    var n=$("#input1").val();
    var p=$("#input2").val();
        if((n==''&&p=='')||n==""){
          $(".p1").text('请输入用户名!');
          $("#input1").focus(function(){
            $(".p1").text('');
          })
        }else {
            $(".p1").text('');
        }
        if(p==''&&n!='') {
            $(".p2").text('请输入密码!');
            $("#input2").focus(function(){
                $(".p2").text('');
              })
        }else {    
            $(".p2").text('');
        }
        var sendText={
            'name':n,
            'pwd':p
        }
        $.ajax({
                url:"/carrots-admin-ajax/a/login",
                type:'POST',
                data: sendText,
                async: false,
                success: function(data){
                var result=JSON.parse(data);    
                console.log(result);
                if(n!=''&&p!=''){
                    if(result.code==0){
                        alert("登录成功");
                        window.location.href="http://dev.admin.carrots.ptteng.com/";
                    }else if(result.code=="-5003"){
                        $('.p3').text(result.message)
                        $("#input1").focus(function(){
                            $(".p3").text('');
                        })
                        $("#input2").focus(function(){
                            $(".p3").text('');
                        })
                    }else if(result.code=="-5004"){
                        $('.p3').text(result.message)
                        $("#input1").focus(function(){
                            $(".p3").text('');
                        })
                        $("#input2").focus(function(){
                            $(".p3").text('');
                        })
                    }
                }else{
                    $('.p3').text('')
                }   
            }
        })    
    })   
})



