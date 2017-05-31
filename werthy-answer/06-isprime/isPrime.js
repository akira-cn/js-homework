function isPrime(n)
{
	t=0,i=2;
	do
	{
		c=n/i;
		if(!(parseInt(c)-c))
		{
			t++;
			break;
		}
		i++;
	}while(i<Math.sqrt(n));
	if(t && n!= 2)
		return false;
	else
		return true;
}