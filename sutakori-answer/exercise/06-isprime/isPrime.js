function isPrime(arg)
{
	if(0|arg !==arg){		
		console.log("请输入正整数");
		return NaN;
	}
	else{
		for(let i=0;i<=Math.sqrt(arg);i++)
		{
			if(arg%i===0) return true;
		}
		return false;
	}
}

