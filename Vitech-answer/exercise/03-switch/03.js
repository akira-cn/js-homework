//----------------------------------\
//  Vitech(2015212149)的 js作业      |
//  https://github.com/liuzirui1122 |
//----------------------------------/
var num = prompt("请输入一个数",0);
if (isNaN(num) || num%1!==0) console.log('不是整数');
else if(parseInt(num)%2===0) console.log('偶数');
else console.log('奇数');
