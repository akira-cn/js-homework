function getSecond(...arr){
	var max=arr[0];
    var second=arr[1];
    for(var i=0,len=arr.length;i<len;i++){
        if(arr[i]>max){
           second=max;
           max=arr[i];
        }else if(arr[i]<max&&arr[i]>second){
           second=arr[i];
        }
    }
    window.alert(second);
    return second;
}