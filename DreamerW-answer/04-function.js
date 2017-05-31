function mathmin(a,b)
{
	var min;
	min=a<=b?a:b;
	return min;
}

var input,min;
min=Number(prompt("请输入一个数"));
input=Number(prompt("请输入一个数"));
while(input)
{
	min=mathmin(min,input);
	input=Number(prompt("请输入一个数"));
}
console.log(min);
