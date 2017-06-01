function fibonacci(n){
    if(n<=2) 
    	return 1;
    else {
      return fibonacci(n-1)+fibonacci(n-2);
    }
}

var p = prompt("Input a number:");
var a = Number(p);
while(1==1){
	if(a<1){
		alert("Wrong number!");
		a = Number(prompt("Input a number:"));
	}
	else{
		alert(fibonacci(a));
		a = Number(prompt("Input a number:"));
	}
}