num = process.stdin("Input a number:(stop if 0)","0");
sum = 0;
a = parseInt(num);
while(a!==0){
    sum += a;
    num = process.stdin("Input a number:(stop if 0)","0");
    a = parseInt(num);
}
alert("Sum is:"+ sum );
