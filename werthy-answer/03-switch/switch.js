let s1 = prompt ("请输入一个整数");
let int = parseInt(s1);
if (s1 - int == 0){
	if (int % 2 === 0){
	alert("偶数");
	}
	else{
	alert("奇数");
	}
}
else {
alert("不是整数");
}