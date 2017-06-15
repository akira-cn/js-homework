function isPrime(n) 
{
	if(!Number.isInteger(n)||n<2)
		return false;
		for (let i = 2; i*i<=n; i++)//or i<=Math.sqrt(n)
		{
			if (n%i === 0)
				return false;
		}
		return true;
}