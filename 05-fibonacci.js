function fibonacci(n)
{
	var num=new Array();
	var i;
	num[0]=1;
	num[1]=1;
	for(i=2;i<n;i++)
		num[i]=num[i-1]+num[i-2];
	return num[n-1]
}

var input;
input=Number(prompt("请输入一个整数"));
console.log(fibonacci(input));