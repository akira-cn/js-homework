let input=parseInt(prompt("请输入一个整数"));
if(isNaN(input)){
	alert("不是整数");
}else if(input%2 ===0){
	alert("偶数");
}else{
	alert("奇数");
}
