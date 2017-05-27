function min(a)
{	
	let x=0;
	let n = a.length;
	for(i=0;i<n-1;i++)
	{
		for(j=i;j<n;j++)
		{
			if(a[i]>a[j])
			{
				x=a[j];
				a[j]=a[i];
				a[i]=x;
			}
		}
	}
	return a[0];
}




let num = new Array();
let temp = prompt("请输入一个数字");
let el = parseInt(temp);
let i = 0;
while ( temp !== "")
{
	num[i]=temp;
	temp =prompt("请输入一个数字");
	ele = parseInt(temp);
	i++;
}
alert("其最小值为："+min(num));
