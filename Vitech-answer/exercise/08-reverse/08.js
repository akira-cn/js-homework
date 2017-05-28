//----------------------------------\
//  Vitech(2015212149)的 js作业      |
//  https://github.com/liuzirui1122 |
//----------------------------------/
String.prototype.rev = function(){
    var str = "";
    for(var i = this.length - 1; i > -1; i--){
        str += this[i];
    }
    return str;
}
 
var reverse = function(str) {
    return str.rev();
}
//测试
console.log('Rev("123"):'+reverse('123'));
console.log('Rev("235235efw w12"):'+reverse('235235efw w12'));