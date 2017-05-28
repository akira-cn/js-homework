var num,nums=[],i=0;
num=prompt("请输入数字，输入非数字结束输入");
while(!isNaN(num))
{
  nums[i]=num;
  num=prompt("请输入数字，输入非数字结束输入");

}
var min=nums[0];
for(let j=0;j<i;j++)
{
	if(nums[j]<min)
		min=nums[j];
}
alert("最小的数字是"+min);