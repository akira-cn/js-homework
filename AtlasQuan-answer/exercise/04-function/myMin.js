function isInteger(obj) {
    return Math.floor(obj) === obj
}
console.log("请输入一组数（两数之间用一个空格隔开 例：12 34 90 23：");
process.stdin.on('readable', function(){
  var chunk = process.stdin.read();

   if (chunk !== null){
    chunk = String(chunk);
    var nums = new Array()
    nums = chunk.split(" ");
    var min = 0
    var length = nums.length;
    min = parseInt(nums[length-1]);
    while(length--){
      if(parseInt(nums[length-1])<min){
          min = parseInt(nums[length-1]);
      }
    }
    console.log(min);
    console.log("请输入一组数（两数之间用一个空格隔开 例：12 34 90 23：");
    //console.log(nums);
   	//chunk = parseInt(chunk);

  
	 }
  		
  
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});