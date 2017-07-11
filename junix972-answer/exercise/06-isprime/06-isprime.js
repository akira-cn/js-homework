function isPrime(n){
	if(n==2){
        return true; 
    }else if(n%2==0){  
        return false;
    }
    var squareRoot = Math.sqrt(n);
    for(var i=3; i<=squareRoot; i+=2) {
      	if(n%i==0) {
         	return false;
      	}
    }
    return true;
}

var a = Number(prompt("Input a number:"));
while(1==1){
	if(a<=1){
		alert("Illegal input!");
	}
	else if(isPrime(a)){
		alert("Prime number!");
	}
	else{
		alert("Composite number!");
	}
	
	a = Number(prompt("Input a number:"));
}