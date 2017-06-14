//----------------------------------\
//  Vitech(2015212149)的 js作业      |
//  https://github.com/liuzirui1122 |
//----------------------------------/
var sum = 0;
do{
    var num = prompt("请输入一个数",0);
    if (isNaN(num)) {
        window.location.href="https://www.baidu.com/s?&wd=什么是数";
        num = 0;
    }
    sum+=parseInt(num);
} while(num!=0)
console.log(sum);