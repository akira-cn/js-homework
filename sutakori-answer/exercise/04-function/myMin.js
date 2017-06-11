function Min(...para)
{
	let min=para[0];
	for(let i=1;i<arguments.length;i++)
	{
		if(para[i]<min) min=para[i];
	}
	return min;
}

console.log(Min(1,22,-1,4,3,-39));