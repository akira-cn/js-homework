function fib(n) {
    if (typeof(n) == 'number') {
        if (n === 1 || n === 2) return 1;
        let p1 = 1,
            p2 = 1;
        for (let i = 3; i <= n; i++) {
            let temp = p2;
            p2 = p1 + p2;
            p1 = temp;
        }
        return p2;
    } else {
        return NaN;
    }
}
