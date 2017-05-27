function minnum(a){
    min=2147483647;
    for (var i = 1; i < a.length; i++) {
      if(min > a[i]){
          min = a[i];
        }
    return min;
    }
}

var input = 0;
var num = 0;
var a = new Array();
do {
    input = prompt("输入数字:(输入非数字停止)");
    num = parseFloat(input);
    if (num!=input) 
        {
            break;
        }
    a.push(num);
} while (1==1);
alert(a.length);
alert("最小值为"+ minnum(a));
