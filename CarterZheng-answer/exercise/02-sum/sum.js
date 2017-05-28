num = prompt("Please input a numer(end with 0)");
a = parseInt(num);
var sum = 0;
while(a != 0){
  sum += a;
  num = prompt("Please input a numer(end with 0)");
  a = parseInt(num);
}
alert("sum is "+sum);
