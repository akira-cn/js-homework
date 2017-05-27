var str=prompt("请输入数字，输入000结束，该程序将给出最小值");
var float=parseFloat(str);
var min=float;
while(str!=="000"){
    float=parseFloat(str);
    if(min>=float)
    min=float;
    str=prompt("请输入数字，输入000结束，该程序将给出最小值");
}
alert("最小值是"+min);

