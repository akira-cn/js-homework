//----------------------------------\
//  Vitech(2015212149)的 js作业      |
//  https://github.com/liuzirui1122 |
//----------------------------------/
function F(n) {
    if (typeof(n) === 'number' && n%1 === 0 && n>0) {
        if (n == 1 || n == 2) return 1;
        var p1 = 1,p2 = 1;
        for (var i = 3; i <= n; i++) {
            var temp = p2;
            p2 = p1 + p2;
            p1 = temp;
        }
        return p2;
    } else {
        return '不是正整数';
    }
}
