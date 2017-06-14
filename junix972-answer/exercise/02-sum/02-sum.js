var s = prompt("Input a number:");
var sum = 0;
var a = parseInt(s);
while(a!==0){
    sum += a;
    s = prompt("Input a number:",);
    a = parseInt(s);
}
alert("Sum is:"+ sum);