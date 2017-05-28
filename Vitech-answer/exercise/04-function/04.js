//----------------------------------\
//  Vitech(2015212149)的 js作业      |
//  https://github.com/liuzirui1122 |
//----------------------------------/
var myMin = function() {
    if (arguments.length==0) return "没有输入";
    var min = arguments[0];
    for (var i=1;i<arguments.length;i++) 
        min = arguments[i]<min?arguments[i]:min;
    return min;
}

//测试
console.log('myMin(1,2,3,4,5)');
console.log(myMin(1,2,3,4,5));
console.log('myMin(5,4,3,2,1)');
console.log(myMin(5,4,3,2,1));
console.log('myMin()');
console.log(myMin());