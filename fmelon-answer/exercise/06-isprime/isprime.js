function isprime(n){
	if(n <= 1){
		return false;
	}
	if(typeof n !== 'number' && n%1 != 0){
		return false;
	}
	if(n == 2){
		return true;
	}
	for(var i = 2, len = Math.sqrt(n); i <= len; i++ ){
		if(n%i == 0){
			return false;
		}
	}
	return true;
}
var a = prompt("请输入需要做素性判断的数");
alert("素性判断："+isprime(a));
