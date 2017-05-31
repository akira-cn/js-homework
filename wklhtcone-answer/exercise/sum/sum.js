var string=prompt("请输入数字并按回车输入下一个数，按0结束");
var int=parseInt(string);
var sum=0;
while(string!=='0'){
   sum+=int;
   string=prompt("请输入数字并按回车输入下一个数，按0结束");
   int=parseInt(string);
}
alert("这些数字的计算总和是"+sum);


