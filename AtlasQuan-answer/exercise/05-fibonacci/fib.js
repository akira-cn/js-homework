function fibonacci(n){
	var a=0;
	var b=1;
	var result = 0;
	if(n === 1){
		return a;
	}else if(n === 2){
		return b;
	}else{
		n = n-2;
	}
	while(n--){
		result = a + b;
		a = b; 
		b = result;
		
	}
	return result;
}

console.log(fibonacci(1),fibonacci(2),fibonacci(3),fibonacci(4),fibonacci(5),
	        fibonacci(6),fibonacci(7),fibonacci(8),fibonacci(9),fibonacci(10));