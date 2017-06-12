function isPrime(n){
	console.log(n)
	for (var i = 2; i<n; i++){
         if ((n%i)==0) {
         	window.alert("不是素数");
         	return false;
         	
         }

	}
	window.alert("是素数");
	return true;
	
}