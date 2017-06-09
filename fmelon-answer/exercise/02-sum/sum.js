let num = prompt("请输入数值：(输入0结束输入并求和)","0");
let sum = 0;
let a = parseInt(num);
while(a!==0){
    sum += a;
    num = prompt("请输入数值：(输入0结束输入并求和)","0");
    a = parseInt(num);
}

alert("求和结果是 "+ sum );
