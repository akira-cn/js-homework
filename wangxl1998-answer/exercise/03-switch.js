var num = window.prompt("输入一段文字","");
var int = parseInt(num);
if(num == int){
  if (int % 2 === 0) {
    alert("是偶数");
  }else {
    alert("是奇数");
  }
}else {
  alert("不是整数");
}
