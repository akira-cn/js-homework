function fibonacci(n ){
    if(n <= 2) alert(1);
    else {
      var a = 1;
      var b = 1;
      var t;
      for (var i = 2; i < n; i++) {
        t = a + b;
        a = b;
        b = t;
      }
    alert("求得的fibonacci数值为："+b);
    }
}
var num = prompt("请输入一个大于等于1的数");
if(parseInt(num) >= 1 ){
    fibonacci(num);
}
else{
    alert("输入的数非法");
}
