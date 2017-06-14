process.stdin.setEncoding('utf8');
console.log("请输入一个整数：");
var sum = 0;
process.stdin.on('readable', function(){
  
  var chunk = process.stdin.read();
  if (chunk !== null) {
  	sum = sum + parseInt(chunk);
  	if(!parseInt(chunk)){
  		process.stdout.write(`sum: ${sum}`);
  		console.log("\n=============")
    	console.log("\n请输入一个整数：");
  		sum = 0;
  	}else{
  		process.stdout.write(`sum: ${sum}`);
   		console.log("\n请输入一个整数：");
  	}
    
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});