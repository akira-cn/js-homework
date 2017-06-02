function fibonacci(n)
{
  var m = 0, k = 1 ,sum=0;
  if(n>=3){
    for(var i = 3 ; i <= n ; i++){
      sum = m + k;
      m = k;
      k = sum;
    }
    return sum;
  }else if (n==1) {
     return 0;
  }else {
     return 1;
  }
}


var str = window.prompt("请输入n(n>=1)","");
var num = parseInt(str);
if (num < 1) {
  alert("n不合格");
}else {
  var result = fibonacci(num);
  console.log(result);
  alert("斐波那契数列该项为："+ result);
}
