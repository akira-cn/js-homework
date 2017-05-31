function fab(x)
{
	if(x<=2)
		return 1;
	else
		return fab(x-1)+fab(x-2);


}
var n;
n=prompt("输入数字");
alert(fab(n));