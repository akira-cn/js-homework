function getSecond() {
	var a=arguments;
	if(a.length<2) return '少于2个数';
	if(a[0]>a[1]){
		var max=a[0],second=a[1];
	}else var max=a[1],second=a[0];
	for (var i = 2; i < a.length ; i++) {
		if(a[i]>max) {second=max;max=a[i];}
		if(second<a[i] && a[i]<max) {second=a[i];}
	}
	return second;
}
//测试
console.log('2,1,4,3'+':   '+getSecond(2,1,4,3));
console.log('1,1,2,2'+':   '+getSecond(1,1,2,2));
console.log('3,3,3,3'+':   '+getSecond(3,3,3,3));
