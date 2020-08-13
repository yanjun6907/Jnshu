var a=document.getElementsByClassName("box");
var times=null;
function _start (){//开始按钮
    window.clearInterval(times);
    //此处添加清除是为了避免重复多次点击开始按钮时会产生重叠效果，等同于复位。
    times=window.setInterval("start()",1000);//设置定时器
}
function _stop (){//停止按钮
    for(var i=0;i<a.length;i++){//遍历所有div标签的盒子对象
        a[i].style.backgroundColor="rgb(255, 217, 0)";//重置盒子初始颜色
    }
    window.clearInterval(times);//清除定时器
}
//随机获取rgb颜色
function colors() {
    var r=Math.round(Math.random()*255);
    var g=Math.round(Math.random()*255);
    var b=Math.round(Math.random()*255);
    //除去初始化颜色
    if("rgb("+r+","+g+","+b+")"!="rgb(255, 217, 0)"){
        return "rgb("+r+","+g+","+b+")";
    } 
}
//获取随机格子
function start() {
for(var i=0;i<a.length;i++){//初始化格子颜色
     a[i].style.backgroundColor="rgb(255, 217, 0)";  
}
var color=new Array();//创建数组用来接收三个随机颜色
for(var j=0;j<3;j++){
    var c=colors();
    if(color.indexOf(c)<0){//没有首次出现返回的值-1
        color.unshift(c);//给则新数组传参
    }
    else {
        j--;//继续循环
    }
}
var arr=new Array();//创建数组用来接收三个随机格子
for(var j=0;j<3;j++){
    var box=Math.floor(Math.random()*a.length);
    if(arr.indexOf(box)<0){//没有首次出现返回的值-1
        arr.unshift(box);//给则新数组传参
        a[box].style.background=color[j];  
    }
    else {
        j--;//继续循环
    }
}  
}
