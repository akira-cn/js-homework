function solve(x){
    if(x===0)
    return 0;
    else if(x===1)
    return 1;
    else return solve(x-2)+solve(x-1);
}
var str=prompt("请输入一个数,该程序将计算它的斐波那契数");
var int=parseInt(str);
var result=solve(int);
alert("这个数的斐波那契数是"+result);


