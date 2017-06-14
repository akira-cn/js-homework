//----------------------------------\
//  Vitech(2015212149)的 js作业      |
//  https://github.com/liuzirui1122 |
//----------------------------------/
function isPrime(n) {
    if (typeof(n) === 'number' && n%1 === 0 && n>1) {
        for(var i=2;i<=Math.sqrt(n);i++) 
            if (n % i == 0) return 'false';
        return 'true';
    } else {
        return '不是大于1的整数';
    }
}

//测试
for(var i=2;i<100;i++) console.log(i+":"+isPrime(i));