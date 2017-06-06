function foo(n) {
	if(n===0) return 0;
	if(n===1) return 1;
	if(n>1) return (foo(n-1)+foo(n-2));
}
//测试
for(var i=0;i<8;i++){
	console.log('fibonacci' + '[' + i +']' + '='+foo(i) );
}