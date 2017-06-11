//----------------------------------\
//  Vitech(2015212149)的 js作业      |
//  https://github.com/liuzirui1122 |
//----------------------------------/
var getSecond = function() {
    var a = arguments;
    if (a.length<2) return "参数少于两个";
    var max = a[0]>a[1]?a[0]:a[1];
    var second = a[0]+a[1]-max;
    for (var i=2;i<a.length;i++) 
        if (a[i]>max) {
            second = max;
            max = a[i];
        } else second = a[i]>second?a[i]:second;
        
    return second;
}

//测试
console.log('getSecond(1,2,3,4,5)');
console.log(getSecond(1,2,3,4,5));
console.log('getSecond(6,5,4,3,2,1)');
console.log(getSecond(6,5,4,3,2,1));
console.log('getSecond()');
console.log(getSecond());