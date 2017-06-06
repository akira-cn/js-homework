function myMin(){
	if(arguments.length===0){
		return "没有输入";
	}

	var min=arguments[0];
	for(var i=0;i<arguments.length;i++){
		if(isNaN(arguments[i])) return "有非整数";
		min=min<arguments[i]?min:arguments[i];
	}
	return min;
}
/*测试*/
console.log(myMin(3,1,2));
console.log(myMin());
console.log(myMin(3,'pp',2));


