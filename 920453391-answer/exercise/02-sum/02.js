var sum=0;
for( ; ;){
	var num=prompt("请输入一个数字,当输入0时停止",0);
	if(isNaN(num)){
		alert("请输入一个数字！");
		continue;
	}	
	else sum+=Number(num);
	if(num==0) break;
};
console.log("SUM=" + sum);
	


