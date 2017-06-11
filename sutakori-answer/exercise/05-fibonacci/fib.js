function fib(n) {
    if (typeof(n) == 'number') {
        if (n === 1 || n === 2) return 1;
		else return fib(n-1)+fib(n-2);
    } else {
        return NaN;
    }
}

console.log(fib(5));
