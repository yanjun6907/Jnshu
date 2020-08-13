
//键盘事件  --keyCode==8--退格键
document.onkeydown=function (event){
    var e=event||window.event||arguments.callee.caller.arguments[0];
    if(e&&e.keyCode==8){// 按下退格键后清除玩家数字
        document.getElementById("num1").innerHTML=null;
        document.getElementById("num2").innerHTML=null;  
    }
}
//使输入框只能输入正整数
var e=document.getElementById("num3");//全局变量
e.onkeydown=function (e) {
    var ev1=e||event;
    //通过设置键盘事件来控制输入内容
    if((ev1.keyCode<37||ev1.keyCode>40)&&(ev1.keyCode<40||ev1.keyCode>57)&&ev1.keyCode!=8){
        return false;
    }
}
//验证玩家数是否正确
function btn() {
    if(e.value<4||e.value>18){
        window.confirm("请输入正确的玩家数量");
    }
    else {
        window.location.href="js-3.html";
    }
}
//经典乱序排列法
function shuffle(array) {
    var m = array.length,
        t, i;
    // 如果还剩有元素…
    while (m) {
        // 随机选取一个元素…
        i = Math.floor(Math.random() * m--);
        // 与当前元素进行交换
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}
//分配玩家数量方法
function mach() {
var a=document.getElementById("num3").value;
    if(a<6&&a>3){
        document.getElementById("num1").innerHTML=1;
        document.getElementById("num2").innerHTML=a-1;     
    }
    if(a<9&&a>5){
        document.getElementById("num1").innerHTML=2;
        document.getElementById("num2").innerHTML=a-2;   
         
    }
    if(a<12&&a>8){
        document.getElementById("num1").innerHTML=3;
        document.getElementById("num2").innerHTML=a-3;  
       
    }
    if(a<16&&a>11){
        document.getElementById("num1").innerHTML=4;
        document.getElementById("num2").innerHTML=a-4;
           
    }
    if(a<19&&a>15){
        document.getElementById("num1").innerHTML=5;
        document.getElementById("num2").innerHTML=a-5;  
          
    }
    shu();
}

function shu(){
var arr=[];
var kill=[];
var peo=[];
var p=document.getElementById("num1").innerHTML;
var x=document.getElementById("num2").innerHTML;
    for(var i=0;i<p;i++){
        kill.push("杀手");
        arr.push("杀手");
    } 
    for(var i=0;i<x;i++){
        peo.push("平民");
        arr.push("平民");
    }
    shuffle(arr); 
    sessionStorage.setItem("kill",JSON.stringify(kill));
    sessionStorage.setItem("peo", JSON.stringify(peo));
    sessionStorage.setItem("arr",JSON.stringify(arr));  
    console.log(arr);
    console.log(kill); 
}


//绑定滑块拖动时输入框的数字
var ran=document.getElementById("range");
function nub() {
    e.value=ran.value;
    mach();
}
//输入框数字来控制滑块位置
function nub1() {
    if(e.value<4||e.value>18){
        document.getElementById("num1").innerHTML=null;
        document.getElementById("num2").innerHTML=null;
    }
    else{
        ran.value=e.value;
        mach();
    }
}
//加减按钮控制滑块
function lf() {  
    ran.value--;//递减点击事件
    nub();
}
function rgt() {  
    ran.value++;//递增点击事件
    nub();
}