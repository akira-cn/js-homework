function getSecond(n)
{	

	for( t in n)
	{
		for(let i=t;i<n.length;i++)
		{
			if(n[t]<n[i])
			{
				let temp = n[i];
				n[i] = n[t];
				n[t] = temp;
			}
		}
	}
	return n[1];
}
