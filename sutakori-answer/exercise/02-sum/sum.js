let input;
let sum=0;
do
{
	input=prompt("请输入一个数（以0结束）");
	if(isNaN(parseFloat(input))){
		continue;
	}
	sum+=parseFloat(input);
}while(input!='0')
console.log(sum);
alert(sum);