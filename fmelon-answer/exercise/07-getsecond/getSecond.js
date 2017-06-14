var arr = new Array();
var temp = prompt('请输入数字(输入0结束)','');
while(temp != null && temp != '' && temp != 0){
    arr.push(temp);
    temp = prompt('请输入数字(输入0结束)','');
}
var num;
for(var i = arr.length-1; i >0; i--){
	for(var j = 0; j < i; j++ ){
		if(arr[j] < arr[j+1]){
			num = arr[j+1];
			arr[j+1] = arr[j];
			arr[j] = num;
		}
	}
}
for(var i=0 ;i< arr.length;i++){
    document.write(arr[i] + ' ');
}
alert('第二大的数：'+ arr[1]);
