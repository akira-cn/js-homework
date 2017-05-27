
function fib(n) {
    if(Number.isInteger(n)){
        if (n === 1 || n === 2) 
            return 1;
        var a = 1, b = 1;
        for (var i = 3; i <= n; i++) {
            var temp = b;
            b = a + b;
            a = temp;
        }
        return b;
    }else {
        return NaN;
    }
}

