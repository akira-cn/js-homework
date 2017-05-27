var str = window.prompt("输入整数","");
var num = parseInt(str);
var array = [];
while (str != "") {
  array.push(num);
  str = window.prompt("输入整数","");
  num = parseInt(str);
}

function getthemin()
{
  var min = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    if(min > arguments[i]){
      min = arguments[i];
    }
  }
  return min;
}

var min = getthemin(...array);
console.log(min);
alert("最小值为："+ min);
