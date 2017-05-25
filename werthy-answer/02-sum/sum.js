let int = prompt("请输入一个数字，当输入0时为您输出结果");
let a = Number(int);
let sum = 0;
while(a !== 0){
	sum+=a;
	int = prompt("请输入一个数字，当输入0时为您输出结果");
	a = Number(int);
}
alert("其和为"+sum);
