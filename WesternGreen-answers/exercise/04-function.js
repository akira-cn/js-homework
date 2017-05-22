function get_min(arr){
    var min;
    min = arr[0];//默认最小值为第一个元素
    for (var i = 1; i < arr.length; i++){
        if (min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}

//以下为测试内容
var test=[];
for (var i = 0; i < 10; i++){
    test[i]=i*i+1;
}
console.log(get_min(test));
