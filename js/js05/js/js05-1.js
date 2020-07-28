//Js原生
function btn(){
var n=document.getElementById("input1").value;
var p=document.getElementById("input2").value;
    if((n==''&&p=='')||n==""){
        document.getElementById("p1").innerHTML='请输入用户名！';
        document.getElementById("p2").innerHTML='';
    }else{
        document.getElementById("p1").innerHTML="";
    }
    if(p==''&&n!=''){
        document.getElementById('p2').innerHTML='请输入密码！';
    }else{
        document.getElementById('p2').innerHTML='';
    }
    var xhr=new XMLHttpRequest();
    var np=`name=${n}&pwd=${p}`;
    xhr.open('POST','/carrots-admin-ajax/a/login',true);
    xhr.setRequestHeader('Content-Type','application/X-www-form-urlencoded');
    xhr.send(np);
    console.log(np);
    xhr.onload=function(){
        var result=JSON.parse(xhr.responseText);
        console.log(result);
        if(n!=''&&p!=''){
            if(result.code==0){
                alert('请求成功');
            }else if(result.code=='-5003'){
                document.getElementById("p3").innerHTML=result.message;
            }else if(result.code=='-5004'){
                document.getElementById("p3").innerHTML=result.message;
            }
        }else {
            document.getElementById("p3").innerHTML='';
        }
    }
}