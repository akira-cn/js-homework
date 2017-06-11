function isprime(n){
	if (n==1) alert('error!');
	else 
	{
		var flag=true;
		for (var i =2; i <= Math.sqrt(n); i++) {
			if (n%i == 0){
				flag=false;
				break;
			}
		}
		console.log(flag);
		alert(flag);
	}
}

num=prompt("input a number:");
num=parseInt(num);
isprime(num);