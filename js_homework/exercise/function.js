function get_min(a)
{	
	var min;
    min = a[0];//默认最小值为第一个元素
    for (var i = 1; i < a.length; i++)
    {
        if (min > arr[i])
        {
            min = arr[i];
        }
    }
    return min;
}
var num = new Array();
var input = prompt("输入一个数字");
var el = parseInt(temp);
var i = 0;
while ( input !== "")
{
	num[i]=input;
	input =prompt("输入一个数字");
	ele = parseInt(temp);
	i++;
}
alert("其最小值为："+get_min(num));