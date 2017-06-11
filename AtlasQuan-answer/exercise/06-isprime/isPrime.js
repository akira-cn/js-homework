function isPrime(n){
	if(n>1){
		var i = 2
		for(i=2;i<n;i++){
			if(n%i===0){
				return false
			}
		}
		if(i===n){
			return true
		}
	}else{
		return false;
	}
}
console.log(isPrime(2),isPrime(4),isPrime(7),isPrime(1222),isPrime(3221),isPrime(13));
