function reverse(str)
{
	let temp="";
	let n=str.length;
	for (i in str)
	{
		temp+=str[n-1-i];
	}
	return temp;	
}
