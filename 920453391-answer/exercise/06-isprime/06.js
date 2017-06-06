function isPrime(n) {
	if(typeof(n)==='number' && n%1===0 & n>1){			
		for (var i = 2; i<=n/2; i++) {
			if(n%i===0) return false;
		}
	    return true;
	 }else return '不是大于1的整数'	;
}
//测试
for (var i = 1; i < 50; i++) {
	console.log( i+'  :'+isPrime(i));
}
