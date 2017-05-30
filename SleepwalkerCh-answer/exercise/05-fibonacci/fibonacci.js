function fibonacci(n){
    if(n <= 2) return 1;
    else {
      return fibonacci(n-1)+fibonacci(n-2);
    }
}
sum=0;
var num = prompt("Input an integer:");
num=parseInt(num);
if(num >= 1 ){
    sum=fibonacci(num);
    alert(sum);
}
else{
    alert("Forbidden input");
}
