var str=prompt("请输入一串字符,该程序将判断其是不是整数");
var int=parseInt(str,10);
switch(int==str){
    case false:
        alert("你输入的不是整数");
        break;
    
    case true:
        if(int%2===0)
        alert("你输入的是整数,而且是一个偶数");
        else 
        alert("你输入的是整数,而且是一个奇数");
        break;
}


