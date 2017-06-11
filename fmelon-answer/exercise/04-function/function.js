function getmin(){
    var min = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      if(min > arguments[i]){
          min = arguments[i];
        }
    return min;
    }
}
var input = 0;
var num = 0;
var a = [];
do {
    input = prompt("请输入数字(输入N终止)");
    num = parseInt(input);
    a.push(num);
} while (input !== "N");
alert("最小值为"+ getmin(...a));
