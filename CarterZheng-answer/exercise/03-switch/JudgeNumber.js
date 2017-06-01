num = prompt("Please input a string");
var a = parseInt(num);
if(Number.isInteger(a)){
  if((a % 2) == 1)
    alert("奇数");
  else
    alert("偶数");
}
else
  alert("不是整数");
