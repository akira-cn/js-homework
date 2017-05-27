
let number = prompt("请输入一个整数");
number = parseInt(number);
if (!isNaN(number)) {
  if (number % 2 === 0)
    alert("是偶数!");
  else
    alert("是奇数!");
}else {
  alert("非合法输入!");
}