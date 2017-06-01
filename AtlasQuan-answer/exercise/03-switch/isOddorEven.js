function isInteger(obj) {
    return Math.floor(obj) === obj
}
console.log("请输入一段文字：");
process.stdin.on('readable', function(){
  var chunk = process.stdin.read();
   if (chunk !== null){
   	chunk = parseInt(chunk);
   	//  console.log(isInteger(chunk));
   	//  console.log(chunk);
  
  if (isInteger(chunk)){
  	if(isInteger(chunk/2)){
  		process.stdout.write(`偶数\n`);
  		console.log("请输入一段文字：");
  	}else{
  		process.stdout.write(`奇数\n`);
  		console.log("请输入一段文字：");
  	}
  } else{
  	process.stdout.write(`不是整数\n`);
  	console.log("请输入一段文字：");
  }
  
	 }
  		
  
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});